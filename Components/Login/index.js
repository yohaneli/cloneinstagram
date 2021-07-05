import React,{useContext} from 'react';
import { View, Text } from 'react-native';

import {FirebaseContext} from '../../FirebaseContext';


const index = () => {

    const firebase = useContext(FirebaseContext);

    console.log(firebase);

    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default index
