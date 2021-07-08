import React,{useContext,useState} from 'react'
import { View, Text } from 'react-native';
import { Button,Input } from 'react-native-elements';
import { FirebaseContext } from '../../FirebaseContext';

const index = ({navigation}) => {

    const {auth,queryAddUser,queryUsers} = useContext(FirebaseContext);

    console.log(queryAddUser,queryUsers);

    // useEffect(() => {
    //     queryUsers().onSnapshot(snapshot => {
    //         console.log(snapshot);
    //         snapshot.forEach(data => {
    //             console.log(data.data());
    //         })
    //     })
    //     return () => {
            
    //     }
    // }, [])

    const [email, setEmail] = useState("essaipro6@test.com");

    const [password, setPassword] = useState("123456");

    const [nom, setNom] = useState("essaipro6");

    const inscription = () => {

        //console.log("inscription");

        try {

            //console.log(email,password,nom);

             queryAddUser({email:user.email,nom:user.nom})

            auth.createUserWithEmailAndPassword(email,password).then(async ({user}) => {

                //await queryAddUser({email:user.email,nom:user.nom})

            }).catch(err => {

                if (err.code === 'auth/email-already-in-use') {

                    console.log('Cette adresse mail est déjà utilisée !');

                }
            
                if (err.code === 'auth/invalid-email') {

                    console.log("Cette adresse mail n'est pas valide");

                }

                console.error(err);
            })

        } catch (error) {

            console.log(error);

        }

    }
    

    return (
        <View>

            <Input
            placeholder="Pseudo"
            onChangeText={setNom}
            value={nom}
            />

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
            title="S'incrire"
            onPress={inscription}
            />

            <Button 
            title="Se connecter"
            onPress={() => navigation.navigate('Login')}
            style={{marginTop:100}}
            />  

        </View>
    )
}

export default index
