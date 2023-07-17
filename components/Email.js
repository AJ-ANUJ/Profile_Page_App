import { NavigationContainer } from '@react-navigation/native';
import React, {useContext} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import DataContext from "./SharedDataContext";

const Email = ({navigation}) => {
    const {email, setEmail} = useContext(DataContext);
    let updatedEmail =email;

    const handleChange = (text) => {
        if(text==='') {
            updatedEmail = email;
        }
        else {
            updatedEmail = text;
        }
    }

    const handleUpdate = () => {
        setEmail(updatedEmail);
        navigation.navigate('ProfilePage');
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 28,fontWeight: 'bold',color: '#333333'
            , alignSelf: 'center', position: 'relative', top: 150}}>What is your email?</Text>
            <View style={{position: 'relative', top: 200}}>
                <Text style={{fontWeight:'bold', color: 'black',fontSize:16, alignSelf: 'center'}}>Your email address</Text>
                <TextInput style={styles.input} placeholder={email}
                onChangeText={handleChange}>    
                </TextInput>
            </View>
            
            <View style={{position: 'relative', top: 250}}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={{fontSize:20,alignSelf:'center', fontWeight:'bold'}}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        alignSelf: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        width: 150,
    }
});

export default Email;