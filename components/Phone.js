import React, {useContext} from 'react';
import {ScrollView, SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import DataContext from "./SharedDataContext";

const Phone = ({navigation}) => {
    const {phone, setPhone} = useContext(DataContext);
    let updatedPhone = phone;

    const handleChange = (text) => {
        if(text==='') {
            updatedPhone = phone;
        }
        else {
            updatedPhone = text;
        }
    }

    const handleUpdate = () => {
        setPhone(updatedPhone);
        navigation.navigate('ProfilePage');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is your phone number?</Text>
            <View style={{position: 'relative', top: 200}}>
                <Text style={{fontWeight:'bold',alignSelf: 'center', color: 'black',fontSize:16}}>Your phone number</Text>
                <TextInput style={styles.input} placeholder={phone}
                onChangeText={handleChange}>    
                </TextInput>
            </View>
            
            <View style={{position: 'relative', top: 250}}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={{fontSize:20,alignSelf:'center', fontWeight: 'bold'}}>Update</Text>
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
    text:{
        position: 'relative',
        top: 150,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 200,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
    },
    button: {
        alignSelf: 'center',
        width: 150,
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 5,
    }
});

export default Phone;