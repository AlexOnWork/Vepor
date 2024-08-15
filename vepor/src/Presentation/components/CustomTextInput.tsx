import React from 'react'
import {StyleSheet , View, Image, TextInput, KeyboardType, } from 'react-native';


//image shoud be type:any because you canot send a variable to require, thats mean you need to put the require inside the variable
interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboard: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}


const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboard,
    secureTextEntry = false,
    property ,
    onChangeText
}: Props) => {
    return (
        
              <View
                        style={styles.formInput}
                    >
                        <Image
                            source={image}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder = {placeholder}
                            keyboardType= {keyboard}
                            value={value}
                            onChangeText={text => onChangeText(property ,text)}
                            secureTextEntry= {secureTextEntry}
                        />

                    </View>
        
    )
}

const styles = StyleSheet.create({


    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#AAAAAA",
        marginLeft: "4%"
    },
    formInput: {
        flexDirection: 'row',
        marginTop: "10%",

    }
    ,
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    }
});
export default CustomTextInput
