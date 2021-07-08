import React,{useContext,useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { Button,Input } from 'react-native-elements';
import {FirebaseContext} from '../../FirebaseContext';


const index = ({navigation}) => {


    return (
        <View>
            <Input
            placeholder="Email"
            />

            <Input
            placeholder="Mot de passe"
            secureTextEntry={true}

            />

            <Button 
            title="Connexion"

            />

            <Button 
            title="Inscription"

            />

            <Button 
            title="Déconnexion"
            />

        </View>
    )
}

export default index
