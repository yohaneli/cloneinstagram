import React,{useContext,useState,useEffect} from 'react';
import { View,Image,FlatList,SafeAreaView } from 'react-native';
import {Text,Input,Avatar,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonShare from "./MaterialButtonShare";
import styles from './style';


import {FirebaseContext} from '../../FirebaseContext';



const index = (props,{id,userId}) => {
    const {queryPostId,queryAddComment,queryDetails} = useContext(FirebaseContext);
   
    // comment date id post id user
    const [contactValue, setcontactValue] = useState(null);
    const [stateCommit, setCommit] = useState('');
    const [comments, setAfficheComments] = useState('');

   
    const listeCommentaire = ()=>  {queryDetails("6eRltiJUf8NJMW3TcGPV").onSnapshot((snapshot)=>{
        console.log("snapshot",snapshot)
        let dataTemp=[];
        if(snapshot && !snapshot.empty){
            snapshot.forEach(element => {
           
            dataTemp.push(element.data())
           
       })  
       setAfficheComments(dataTemp);   
        // console.log("comment",comment)  
     }

    });}



    const changeCommit = (commit)=>{
        setCommit(commit);
    }
    const saveName = () => {
    //console.log(stateCommit);
    queryAddComment({
        commentaire : stateCommit,
        gallery:"6eRltiJUf8NJMW3TcGPV",
        user: "vqJ9uySO5hRUshek8iiXelqgKw93",
        date : Date.now()
    })
    setCommit('');
    }
    
    const readOn = async ()=>{
        const contact = await queryPostId("6eRltiJUf8NJMW3TcGPV");
    contact.exists && setcontactValue(contact.data());
   // console.log("Je suis la  :",contact.data());
    }
    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <Avatar rounded source={{uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}} />
            <ListItem.Content>
                <ListItem.Subtitle>name user</ListItem.Subtitle>
                <ListItem.Title>{item.commentaire}</ListItem.Title>
            </ListItem.Content>
           
        </ListItem>

      );

    useEffect(() => {
        const cleanup = readOn();
        const cleanup2 =listeCommentaire();
        return () => {
            cleanup ;cleanup2;
        }
    },[])
    return (
        <SafeAreaView  style={[styles.container, props.style]}>
            <Image
                source={{uri: contactValue?.photo }}               
                style={styles.cardItemImagePlace}
                
            />
            <View style={styles.bodyContent}>
                <Text style={styles.titleStyle}>{contactValue?.description}</Text>
                <MaterialButtonShare
                style={styles.materialButtonShare}
            />
            </View>
            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={()=> <Text>Vous n'avez pas de detail</Text>  }
            />
            <Input  
                    placeholder='Commentaire'
                    value={stateCommit}
                    onChangeText={changeCommit}
                    rightIcon={  <Icon
                        name='send'
                        size={24}
                        color='black'
                        onPress={saveName}
                      />}
            />
            
           
        </SafeAreaView >
    )
}

export default index
