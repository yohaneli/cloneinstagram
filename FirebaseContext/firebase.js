import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

class Firebase {

    constructor() {
        
        this.auth = auth();
        this.db=firestore();
        this.storage=storage();
    }

    // all queries

    //list users

    queryUsers = () => this.db.collection("users")

    //add un user

    queryAddUser = (id,data) => this.db.collection("users").doc(id).add(data);

    //update user

    queryUpdateUser = (id,data) => firestore.collection("users").doc(id).update(data);

    // add image

    queryAddImage = (id,nameFile,uri) => storage().ref(`images/${id}/${nameFile}`).putFile(uri);

    // recuperer lien de telechargement

    queryGetImageUrl = (id,nameFile) => storage().ref(`images/${id}/${nameFile}`).getDownloadURL();

    //etat connexion

    queryAuthListener = () => auth().onAuthStateChanged();

    // liste des posts
    
    queryPost = () => this.db.collection("gallery");

    // select un post avec id

    queryPostId = (id) => this.db.collection("gallery").doc(id).get();

    //ajouter un post

    queryAddPost = (data) => this.queryPost().add(data);

    //update un contact

    queryFavori = (id,data) => firestore().collection("favoris").doc(id).update(data);

}

export default Firebase;