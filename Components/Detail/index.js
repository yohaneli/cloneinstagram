import React,{useContext,useState,useEffect} from 'react';
import {StyleSheet, View,Image,FlatList,StatusBar,SafeAreaView } from 'react-native';
import {Button,Text,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonShare from "./MaterialButtonShare";






import {FirebaseContext} from '../../FirebaseContext';


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const index = (props,{id,userId}) => {
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
    const renderItem = ({ item }) => (
        <Item title={item.commentaire} />
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
                source={{uri:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' }}               
                style={styles.cardItemImagePlace}
            />
            <View style={styles.bodyContent}>
                <Text style={styles.titleStyle}>{contactValue?.description}</Text>
                <MaterialButtonShare
                style={styles.materialButtonShare}
            />
            </View>
            <FlatList
                data={comment}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        overflow: "hidden"
    },
    cardItemImagePlace: {
        backgroundColor: "#ccc",
        minHeight: 210,
        flex: 1
      },
    materialButtonShare: {
        position: "absolute",
        marginLeft:350,
    },
    bodyContent: {
        padding: 16,
        paddingTop: 24,
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 24,
        color: "#000",
        paddingBottom: 12
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 107,
        marginLeft: 88
    },
    item: {
        backgroundColor: '#da1b60',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius:25
      },
      title: {
        fontSize: 15,
      },})

export default index
