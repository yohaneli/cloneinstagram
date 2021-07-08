import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FirebaseContext } from '../../FirebaseContext';

const index = () => {

    const[nom, setNom] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmpassword] = useState('');
    

    const { auth, queryAddUser, queryUsers, register } = useContext(FirebaseContext);
    //console.log(queryUsers);
    register("zamord@marion.com", "123456").then(user => console.log(user) ).catch(error => console.log(error));

    const inscription = () => {
        try{
            register("zamord@marion.com", "123456").then(user => console.log(user) ).catch(error => console.log(error));
             
                
        }catch(err){
            console.log(err);
        }
    }

    const btn = (nom === '' || email === '' || password === '' || password !== confirmPassword) ?
    <Button title="S'inscrire" onPress={register} disabled={true} /> : <Button title="S'inscrire" onPress={inscription}   /> 

    return (
        <View>
            <Input
                placeholder='Nom'
                onChangeText={setNom}
                value={nom}
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

            <Input
                placeholder='Confirmer le mot de passe'
                onChangeText={setConfirmpassword}
                secureTextEntry={true}
                value={confirmPassword}
                
            />

            {btn}
        </View>
    )
}

export default index;
