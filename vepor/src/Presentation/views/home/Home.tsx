
import { Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from "./Styles";


const HomeScreen = () => {

     const {email, password , onChange}=useViewModel();

    //I have used this dependence , because i saw nativeStack.... is more efficient thant just stack , remind delete stack package if we dont use all
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    //useStates

    return (
        
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

                    <CustomTextInput
                     image= {require("../../../../assets/email.png")}
                     placeholder= 'Correo Electrónico'
                     value={email}
                     keyboard= 'email-address'
                     property= "email"
                     onChangeText= {onChange}
                    >

                    </CustomTextInput>

                    <CustomTextInput
                     image= {require("../../../../assets/password.png")}
                     placeholder= 'Contraseña'
                     value={password}
                     keyboard= 'default'
                     secureTextEntry={true}
                     property= "password"
                     onChangeText= {onChange}
                    >

                    </CustomTextInput>

           
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




export default HomeScreen
