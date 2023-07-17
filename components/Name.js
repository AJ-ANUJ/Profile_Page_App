import React, {useContext} from "react";
import {SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import DataContext from "./SharedDataContext";

const Name = ({navigation}) => {

    const {name, setName} = useContext(DataContext);
    let [first, last] = name.split(' ');

    const handleSubmitFirst = (text) => {
        if(text==='') {
            first = name.split(' ')[0];
        }
        else {
            first = text;
        }
    }

    const handleSubmitLast = (text) => {
        if(text==='') {
            last = name.split(' ')[1];
        }
        else {
            last = text;
        }
    }

    const handleUpdate = () => {
        let finalName = first+' '+last;
        setName(finalName);
        navigation.navigate('ProfilePage');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is your name?</Text>
            <View style={styles.container1}>
                <View style={{marginRight:10}}>
                    <Text style={{fontWeight:"bold",fontSize:16, alignSelf:'center'}}>First Name</Text>
                    <TextInput style={styles.input} placeholder={first}
                    onChangeText={handleSubmitFirst}>    
                    </TextInput>
                </View>
        
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:"bold",fontSize:16, alignSelf:'center'}}>Last Name</Text>
                    <TextInput style={styles.input} placeholder={last}
                    onChangeText={handleSubmitLast}>    
                    </TextInput>
                </View>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={{fontSize:20,fontWeight: 'bold',alignSelf:'center'}}>Update</Text>
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
    container1: {
        position: 'relative',
        top: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        position: 'relative',
        top: 250,
    },
    text:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'center',
        position: 'relative',
        top: 100,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#87CEFA',
        padding:10,
        width: 150,
        borderRadius: 5,
        alignSelf: 'center',
    },
    placeholder: {
        fontWeight: 'bold',
    },
});
export default Name;