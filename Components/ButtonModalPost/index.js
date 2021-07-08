import React,{useState} from 'react'
import { View, Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {afficheModal} from '../../Redux/Actions/modal';
import { launchCamera } from 'react-native-image-picker';


const index = () => {

    const {modal} = useSelector(state => state);

    //console.log(modal);

    const dispatchModal = useDispatch();

    const toggleCamera = () => {

        console.log("publier");

        //console.log("image",item.id);

        let options = {
            storageOptions: 
            {
  
              skipBackup: true,
              path: 'images',
  
            },
          };
          
        launchCamera(options, (response) => {
  
          console.log('Response = ', response);
  
          if (response.assets != undefined) {
  
            //setLoading(true);
  
            const {uri} = response.assets[0];
  
            console.log("uri = ",uri);

            dispatchModal(afficheModal({visible:!modal.visible,tempPhoto:uri}));

  
            // queryAddImage(item.id,"dope.jpeg",uri).then(res => {
  
            //   //console.log(res);
  
            //   queryGetImageUrl(item.id,"dope.jpeg").then(url => {
  
            //     queryUpdateContact(item.id,{
            //       avatar_url:url
            //     })
  
            //     setLoading(false);
  
            //   })
  
            // })
  
          }
  
        })
  

    }

    return (
        <FAB 
        size="large"
        placement="right"
        color="black"
        size="large"
        icon={
            <Icon
            name="plus"
            size={20}
            color="white"
            />
        }
        onPress={toggleCamera}
        />
    )
}

export default index
