import React,{useContext,useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { Button,Input } from 'react-native-elements';
import {FirebaseContext} from '../../FirebaseContext';


const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext);

    //console.log(auth);

    const [email, setEmail] = useState("essaipro6@test.com");

    const [password, setPassword] = useState("123456");

    const connexion = () => {

        console.log("connexion");

        try {

            //console.log(email,password);

            auth.signInWithEmailAndPassword(email,password);

        } catch (error) {

            console.log(error);

        }

    }

    const deconnexion = () => {

        //console.log("deconnexion");

        auth.signOut();

    }

    

    return (
        <View>
            <Input
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            />

            <Input
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            />

            <Button 
            title="Connexion"
            onPress={connexion}
            />

            <Button 
            title="Inscription"
            onPress={() => navigation.navigate('Register')}
            style={{marginTop:100}}
            />

            <Button 
            title="Déconnexion"
            onPress={deconnexion}
            />

        </View>
    )
}

export default index
