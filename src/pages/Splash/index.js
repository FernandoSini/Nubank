import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import log from '~/assets/Nubank_Logo3x.png'


export default function Splash () {

        return (
            <View style={styles.Container}>
                <Image  source={log}></Image>
            </View>
            
        );
    }

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#000000",
        alignItems: "center",
        justifyContent:"center"
        

    } , 
    text: {
        color:'#fff',
        
      
    },
    Imagem:{ 
        marginTop:10,
        
        
    }

})