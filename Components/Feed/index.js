import React,{useState,useContext,useEffect} from 'react'
import { View, Text,FlatList,StatusBar,SafeAreaView } from 'react-native'
import {FirebaseContext} from '../../FirebaseContext';
import {styles} from './style';
import { Icon } from 'react-native-elements';
import ButtonModalPost from '../ButtonModalPost';
import ModalPost from '../ModalPost';

const Item = ({id,user,photo}) => {

    return (
        <View style={styles.item} >
            <Text style={styles.item} > ID du post : {id}</Text>
            <Text style={styles.item}> Initiale User :{user}</Text>
            <Text style={styles.item}> Photo : {photo}</Text>
        </View>
    )
}

const index = () => {

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
