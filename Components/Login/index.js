import React,{useContext, useState} from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

import {FirebaseContext} from '../../FirebaseContext';



const index = ({navigation}) => {

    const { auth } = useContext(FirebaseContext);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const connexion = () => {
        try{
            auth.signInWithEmailAndPassword(email, password)
            console.log('connexion', email, password);
        }catch(err) {
            console.log(err);
        }
    }

    const Logout = () => {
        auth.signOut();
    }
    

    return (
        <View>
            <Button
                title="INSCRIPTION"
                onPress={() => navigation.navigate("Register") }
            />

            <Input
                placeholder='Email'
                onChangeText={setEmail}
                value={email}    
            />

            <Input
                placeholder='Mot de passe'
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
            />

            <Button
                title="connexion"
                onPress={connexion}
            />

            <Button
                buttonStyle={{marginTop: 20}}
                title="Deconnexion"
                onPress={Logout}
            />  
        </View>
    )
}

export default index
