import React,{useState} from 'react'
import { View, Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {afficheModal} from '../../Redux/Actions/modal';

const index = () => {

    const {modal} = useSelector(state => state);

    //console.log(modal);

    const dispatchModal = useDispatch();

    const open = () => {

        console.log("open dial");

        dispatchModal(afficheModal({visible:!modal.visible}));

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
        onPress={open}
        visible={!modal.visible}
        />
    )
}

export default index
