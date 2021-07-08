import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#CCC",
        flexWrap: "nowrap",
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        overflow: "hidden"
    },
    cardItemImagePlace: {
        backgroundColor: "#ccc",
        minHeight: 210,
        flex: 1,
        
      },
    materialButtonShare: {
        position: "absolute",
        marginLeft:350,
    },
    bodyContent: {
        padding: 16,
        paddingTop: 24,
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 24,
        color: "#000",
        paddingBottom: 12
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 107,
        marginLeft: 88
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
    
       
        borderColor:'red',
        borderWidth:0.5
      },
      subTitle:{
        fontSize:10,
        
      },
      title: {
        fontSize: 15,
      },
      containerButton: {
        backgroundColor: "#cf3232",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 28,
        shadowColor: "#111",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 2,
        minWidth: 40,
        minHeight: 40
      },
      icon: {
        color: "#fff",
        fontSize: 24,
        alignSelf: "center"
      }
})
export default styles;
