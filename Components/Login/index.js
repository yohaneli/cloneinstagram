import React,{useContext} from 'react';
import { View, Text } from 'react-native';

import {FirebaseContext} from '../../FirebaseContext';


const index = () => {

    const {queryPost} = useContext(FirebaseContext);

   // console.log(queryPost());

    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default index
