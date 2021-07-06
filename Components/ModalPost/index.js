import React from 'react'
import { View, Text } from 'react-native'
import { Button, Overlay,Input } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import { afficheModal } from '../../Redux/Actions/modal';
import { FirebaseContext } from '../../FirebaseContext';
import {styles} from './style';


const index = () => {

    const {modal} = useSelector(state => state);

    console.log(modal);

    const dispatch = useDispatch();

    const toggleOverlay = () => {
        
        console.log("toggle overlay");

        dispatch(afficheModal({visible:!modal.visible}));

      };


    return (
        <Overlay 
        isVisible={modal.visible} 
        onBackdropPress={toggleOverlay} 
        overlayStyle={styles.overlayStyle}
        >

            <Text style={styles.title}>Ajouter un post</Text>

            <Input
            placeholder='Ex : Légende du post'
            />

                <View style={styles.button}>

                    <Button title="Publier" type="outline" onPress={() => console.log("publier")}/>

                </View>

        </Overlay>
    )
}

export default index
