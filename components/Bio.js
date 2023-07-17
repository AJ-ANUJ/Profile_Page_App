import React, {useContext} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import DataContext from "./SharedDataContext";

const Bio = ({navigation}) => {
    const {tmay, setTMAY} = useContext(DataContext);
    let updatedBio = tmay;

    const handleChange = (text) => {
        if(text==='') {
            updatedBio = tmay;
        }
        else {
            updatedBio = text;
        }
    }

    const handleUpdate = () => {
        setTMAY(updatedBio);
        navigation.navigate('ProfilePage');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tell us a little about yourself</Text>
            
            <TextInput style={styles.input} placeholder={tmay}
            onChangeText={handleChange} multiline={true}>    
            </TextInput>
            
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={{fontSize:20,alignSelf:'center', fontWeight: 'bold'}}>Update</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text:{
        position: 'relative',
        top: 150,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight:10,
    },
    input: {
        position: 'relative',
        top: 200,
        alignSelf: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight:10,
    },
    button: {
        position: 'relative',
        top: 250,
        alignSelf: 'center',
        backgroundColor: '#87CEFA',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight:10,
        padding: 10,
        width: 150,
    }
});

export default Bio;