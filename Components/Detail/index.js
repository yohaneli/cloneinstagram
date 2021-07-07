import React,{useContext,useState,useEffect} from 'react';
import {StyleSheet, View,Image } from 'react-native';
import {Button,Text,Input } from 'react-native-elements';


import {FirebaseContext} from '../../FirebaseContext';

const index = ({id,userId}) => {
    const {queryPostId,queryAddComment,queryDetails} = useContext(FirebaseContext);
   // console.log("queryUsers :",queryUsers)
    
    // comment date id post id user
    const [contactValue, setcontactValue] = useState(null);
    const [stateCommit, setCommit] = useState('');
    const [comment, setComment] = useState('');

  const listeCommentaire = ()=>  {queryDetails().onSnapshot((snapshot)=>{
        console.log(snapshot.docs)
        let dataTemp=[];
        snapshot.docs.forEach(element => {
            
            element.exists && element.data().gallery === "4J4tDf8GrK98WVsYXttw" && dataTemp.push(element.data())
           
        })
        setComment(dataTemp);     
        console.log(comment)  
    });}



    const changeCommit = (commit)=>{
        setCommit(commit);
    }
    const saveName = () => {
    console.log(stateCommit);
    queryAddComment({
        commentaire : stateCommit,
        gallery:"4J4tDf8GrK98WVsYXttw",
        user: "vqJ9uySO5hRUshek8iiXelqgKw93",
        date : Date.now()



    })
    setCommit('');
    
    }
    
    const readOn = async ()=>{
        const contact = await queryPostId("4J4tDf8GrK98WVsYXttw");
    contact.exists && setcontactValue(contact.data());
   // console.log("Je suis la  :",contact.data());
}


useEffect(() => {
    const cleanup = readOn();
    const cleanup2 =listeCommentaire();
    return () => {
        cleanup ;cleanup2;
    }
},[])
    return (
        <View style={styles.container}>
            <Image
                source={{uri:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' }}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text>{contactValue?.description}</Text>

            <Text style={{margin:10,backgroundColor:"red", padding:20, borderRadius:10}} >{comment[0]?.stateCommit}</Text>
            <Input  
                    placeholder='Commentaire'
                    value={stateCommit}
                    onChangeText={changeCommit}
            />
            <Button
                        title="Envoyer"
                        type="outline"
                        onPress={saveName}
                    />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 107,
      marginLeft: 88
    },})

export default index
