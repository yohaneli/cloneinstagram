import React from 'react'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    overlayStyle:{
        width:280
    },
    title:{
        paddingHorizontal:10,
        paddingVertical:30,
        fontWeight:'bold'
    },
    button:{
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingBottom:20
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})
