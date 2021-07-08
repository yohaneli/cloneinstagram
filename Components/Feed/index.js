import React,{useState,useContext,useEffect} from 'react'
import { View, Text,FlatList,StatusBar,SafeAreaView,Image } from 'react-native'
import {FirebaseContext} from '../../FirebaseContext';
import {styles} from './style';
import ButtonModalPost from '../ButtonModalPost';
import ModalPost from '../ModalPost';
import CompoMcwc from './compoMcwc';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({id,user,photo,navigation}) => {

    return (

        <View style={styles.item}>
            <Icon
            name="ellipsis-h"
            size={16}
            color="black"
            />
            <Text style={styles.item}> Initiale User :{user}</Text>
            <Image
            style={{width:200,height:200}}
            source={{uri:photo}}
            />
            

        </View>

            // <CompoMcwc id={id} user={user} photo={photo} />
    )
}

const index = ({navigation}) => {

    const {queryPost} = useContext(FirebaseContext);

    const [listPosts, setListPosts] = useState(null);

    //console.log(result);

    useEffect(() => {

        queryPost().onSnapshot(snapshot => {

            //console.log(snapshot);

            let tempListPost = [];

            snapshot.forEach(data => {

                //console.log(data.data());

                tempListPost.push({id:data.id,...data.data()});

                //console.log(tempListPost);

            })

            setListPosts(tempListPost);

            // console.log(listPosts);

        })

        return () => {

        }

    }, [])

    const renderItem = ({ item }) => (
        <Item id={item.id} user={item.user} photo={item.photo} />
        
      );
    
    return (
        <SafeAreaView style = {styles.container}>
            <FlatList 
            data={listPosts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => <Text>Vous n'avez aucune publication pour le moment</Text>}
            />
            <ButtonModalPost/>
            <ModalPost/>
        </SafeAreaView>
    )
}

export default index;
