import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from "./ViewModel";
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles';

const RegisterScreen = () => {
    //I have used this dependence , because i saw nativeStack.... is more efficient thant just stack , remind delete stack package if we dont use all
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    //those are the vlues that we bring form the View model
    const { name, surname, confirmPassword, email, onChange, password, phone, register} = useViewModel();

    return (

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

                    <CustomTextInput
                        placeholder='Nombre'
                        keyboard='default'
                        image={require("../../../../assets/user.png")}
                        property="name"
                        onChangeText={onChange}
                        value={name}

                    />
                    <CustomTextInput
                        placeholder='Apellidos'
                        keyboard='default'
                        image={require("../../../../assets/user.png")}
                        property="surname"
                        onChangeText={onChange}
                        value={surname}

                    />
                    <CustomTextInput
                        placeholder='Correo Electrónico'
                        keyboard='default'
                        image={require("../../../../assets/email.png")}
                        property="email"
                        onChangeText={onChange}
                        value={email}

                    />
                    <CustomTextInput
                        placeholder='Telefono'
                        keyboard='numeric'
                        image={require("../../../../assets/phone.png")}
                        property="phone"
                        onChangeText={onChange}
                        value={phone}

                    />
                    <CustomTextInput
                        placeholder='Contraseña'
                        keyboard='default'
                        image={require("../../../../assets/password.png")}
                        property="password"
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <CustomTextInput
                        placeholder='Contraseña'
                        keyboard='default'
                        image={require("../../../../assets/confirm_password.png")}
                        property="confirmPassword"
                        onChangeText={onChange}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />

                    <View style={{ marginTop: "10%" }}>
                        <RoundedButton
                            text='LOGIN'
                            onPress={() => register()}
                        >

                        </RoundedButton>
                    </View>

                </View>
            </View>
        </View>
    );
}

//hot reaload




export default RegisterScreen;
