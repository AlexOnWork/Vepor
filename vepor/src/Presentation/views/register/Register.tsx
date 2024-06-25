import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

const RegisterScreen = () => {
    //I have used this dependence , because i saw nativeStack.... is more efficient thant just stack , remind delete stack package if we dont use all
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   

    return (
        //Column
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/foodbg.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImages}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>

            <View style={styles.forms}>
                <View>
                    <Text style={styles.formText}>REGISTRARSE</Text>
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/user.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Nombre'
                            keyboardType='default'
                        />

                    </View>
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/my_user.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Apellidos'
                            keyboardType='default'
                            
                        />

                    </View>
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/email.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Correo Electrónico'
                            keyboardType='email-address'
                            
                        />

                    </View>
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/phone.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Teléfono'
                            keyboardType='numeric'
                    
                        />

                    </View>
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/password.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Contraseña'
                            keyboardType='default'
                            secureTextEntry={true}
                        />

                    </View>
                   
                    <View
                        style={styles.formInput}
                    >
                        <Image
                            source={require("../../../../assets/confirm_password.png")}
                            style={styles.formIcon}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder='Confirmar contraseña'
                            keyboardType='default'
                            secureTextEntry={true}
                        />

                    </View>
                    <View style={{ marginTop: "10%" }}>
                        <RoundedButton
                            text='LOGIN'
                            onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
                        >

                        </RoundedButton>
                    </View>
                  
                </View>
            </View>
        </View>
    );
}

//hot reaload

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.4,

    },
    forms: {
        width: '94%',
        height: '70%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 15,
        borderRadius: 30,
        left: '3%',
        right: '3%',
        padding: "8%"
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems:'center',
        top: '5%'
    }
    ,
    logoImages: {
        width: 100,
        height: 100
    }
    ,
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        paddingTop:10
    }
    ,
    formText: {
        fontWeight: "bold",
        fontSize: 16
    }
    ,
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
   ,
    formRegisterText: {
        fontStyle: "italic",
        color: "orange",
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontWeight: "bold",
        marginLeft: "3%"
    }
});




export default RegisterScreen;
