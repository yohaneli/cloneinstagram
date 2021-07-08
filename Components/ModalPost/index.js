import React,{useState,useEffect,useContext} from 'react'
import { View, Text,Image } from 'react-native'
import { Button, Overlay,Input } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import { afficheModal } from '../../Redux/Actions/modal';
import { FirebaseContext } from '../../FirebaseContext';
import {styles} from './style';


const index = () => {

    const {modal} = useSelector(state => state);

    const [valueDescription, setValueDescription] = useState("");

    const {queryAddPost,queryGetImageUrl,queryAddImage} = useContext(FirebaseContext);

    console.log(queryAddPost);

    const dispatch = useDispatch();

    //console.log(modal);

    const closeOverlay = () => {
        
        console.log("close overlay");

        dispatch(afficheModal({visible:false,tempPhoto:null}));

    };

    const handleChangeDescription = (valueDescription) => {

        setValueDescription(valueDescription);

        //console.log(valueDescription);

    }

    let photoTemp = null

        if (modal.tempPhoto) {

            photoTemp = modal.tempPhoto;

            //console.log(photoTemp)

        }

    const savePost = () => {

        console.log("POSTER");

        
        //closeOverlay();

        queryAddImage("NiimenwtAaaKRt5TOwyuKsL0xqk1","essaiFinal3.jpeg",modal.tempPhoto).then(res => {
            
            console.log(res);

            queryGetImageUrl("NiimenwtAaaKRt5TOwyuKsL0xqk1","essaiFinal3.jpeg").then(url => {

                console.log(url)

                queryAddPost({
                    description:valueDescription,
                    photo:url,
                    user:"NiimenwtAaaKRt5TOwyuKsL0xqk1",
                    date:Date.now()
                })

                closeOverlay();
    
            })

        })
        

    }


    return (
            <View style={styles.container}>

                <Overlay 
                isVisible={modal.visible} 
                onBackdropPress={closeOverlay} 
                overlayStyle={styles.overlayStyle}
                >

                    <Text style={styles.title}>Ajouter un post</Text>

                <Image
                source={{
                uri:
                photoTemp,
                }}
                style={{
                height: 150,
                marginTop: 10,
                marginLeft:20,
                width: 160,
                justifyContent:"center"
                }}
                />


                <Input
                placeholder='Ex : Légende du post'
                onChangeText={handleChangeDescription}
                value={valueDescription}
                />

                    <View style={styles.button}>

                        <Button title="Publier" type="outline" onPress={savePost}/>

                    </View>

                </Overlay>

            </View>
    )
}

export default index
