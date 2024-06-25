import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';

const HomeScreen = () => {

     const {email, password , onChange}=useViewModel();

    //I have used this dependence , because i saw nativeStack.... is more efficient thant just stack , remind delete stack package if we dont use all
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    //useStates

    return (
        //Column
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/foodbg.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImages}
                />
                <Text style={styles.logoText}>MANDAO</Text>
            </View>

            <View style={styles.forms}>
                <View>
                    <Text style={styles.formText}>INICIAR SESION</Text>
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
                            value={email}
                            onChangeText={text => onChange('email',text)}
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
                            value={password}
                            onChangeText={text => onChange('password',text)}
                    
                            
                        />

                    </View>
                    <View style={{ marginTop: "10%" }}>
                        <RoundedButton
                            text='ENTRAR'
                            onPress={() => {
                                console.log("email: "+email, "password: " +password);
                                
                            }}
                        >

                        </RoundedButton>
                    </View>
                    <View style={styles.formRegister}>
                        <Text>¿No tienes cuenta?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RegisterScreen')}
                        >
                            <Text style={styles.formRegisterText}>Registrate</Text>
                        </TouchableOpacity>
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
        height: '40%',
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
        top: '20%'
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
    formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10%"
    },
    formRegisterText: {
        fontStyle: "italic",
        color: "orange",
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontWeight: "bold",
        marginLeft: "3%"
    }
});


export default HomeScreen
