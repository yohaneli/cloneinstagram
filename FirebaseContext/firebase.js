import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

class Firebase {

    constructor() {
        
        this.auth = auth();
        this.db=firestore();
        this.storage=storage();
    }

    
    register = (email,password)=> auth().createUserWithEmailAndPassword(email,password);
    //list users

    queryUsers = () => this.db.collection("users")

    queryOneUsers = (id) => this.db.collection("users").doc(id).get();

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

    
    
    //lire comment
    
    queryDetails = (id) => this.db.collection("comment").where('gallery','==',id).orderBy('date','desc');

    queryDetailId = (id) => this.db.collection("comment").doc(id).get();
    
    queryAddComment = (data) => this.db.collection("comment").add(data);
    
    
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