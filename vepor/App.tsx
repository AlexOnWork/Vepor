import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, ToastAndroid } from 'react-native';
import RoundedButton from './src/components/RoundedButton';

export default function App() {
  return (
    //Column
    <View style={styles.container}>
      <Image
        source={require('./assets/foodbg.jpg')}
        style={styles.ImageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logoImages}
        />
        <Text style={styles.logoText}>VEPOR</Text>
      </View>

      <View style={styles.forms}>
        <View>
          <Text style={styles.formText}>INICIAR SESION</Text>
          <View
            style={styles.formInput}
          >
            <Image
              source={require("./assets/email.png")}
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
              source={require("./assets/password.png")}
              style={styles.formIcon}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder='Contraseña'
              keyboardType='default'
              secureTextEntry={true}
            />

          </View>
          <View style={{marginTop:"10%"}}>
           <RoundedButton
           text='ENTRAR'
           >
        
           </RoundedButton>
          </View>
          <View style={styles.formRegister}>
            <Text>¿No tienes cuenta?</Text>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
    backgroundColor: '#F7F2E7',
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
  formRegister:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:"10%"
  },
  formRegisterText:{
    fontStyle:"italic",
    color:"orange",
    borderBottomWidth: 1,
    borderBottomColor:"orange",
    fontWeight:"bold",
    marginLeft:"3%"
  }
});
