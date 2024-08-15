


import { StyleSheet } from "react-native";
import { MyColors } from '../../theme/AppTheme';

const RegisterStyles = StyleSheet.create({
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
        alignItems: 'center',
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
        paddingTop: 10
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


export default  RegisterStyles;