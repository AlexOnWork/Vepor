import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

interface Props {
    text: string
}

const RoundedButton = ({text}:Props) => {
    return (
        <TouchableOpacity
            //onPress={() = {}}
            style={styles.roundedButton}
        >
        <Text style={ styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    roundedButton:{
        width:'100%',
        height:50,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:80

    },
    textButton:{
        color:"white",
      
        
    }
})
export default RoundedButton
