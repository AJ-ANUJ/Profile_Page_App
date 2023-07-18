import React, {useContext, useState} from 'react';
import {ScrollView, SafeAreaView, View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import DataContext from "./SharedDataContext";
import {launchImageLibrary} from 'react-native-image-picker';


const ProfilePhoto = ({navigation}) => {
    const {profilePhoto, setProfilePhoto} = useContext(DataContext);
    const isLocalPath = profilePhoto && profilePhoto.startsWith('./');
    const imgSource = isLocalPath?require('./ag.png'):{ uri: profilePhoto};
    const [msg, setMsg] = useState('');
    const [showView, setShowView] = useState(false);
    
    const handleSelectPhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            allowsEditing: true,
        };

        launchImageLibrary(options, (response) => {
            if(!response.didCancel && !response.error) {
                // console.log(response);
                // console.log(response.assets[0].uri);
                setProfilePhoto(response.assets[0].uri);
                setMsg('Profile photo updated succesfully.');
                // setTimeout(() => {
                //     setMsg('');
                // }, 3000);
                setShowView(true);
                setTimeout(() => {
                    setShowView(false);
                }, 3000);
            }
        });
    };

    return (
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Upload one of your recent photos</Text>
            <Image style={styles.profilePhoto} source={imgSource}></Image>
            <TouchableOpacity style={styles.button} onPress={handleSelectPhoto}>
                <Text style={{alignSelf:'center',fontSize:20, fontWeight: 'bold'}}>Select Photo</Text>
            </TouchableOpacity>
            {showView && (<View style={styles.msgContainer}>
                <Text style={styles.msg}>{msg}</Text>
            </View>
            )}
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
    },
    text:{
        // position: 'relative',
        // top: 150,
        fontSize: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 150,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        // position: 'relative',
        // top: 220,
        width: 150,
        alignSelf:'center',
        backgroundColor: '#87CEFA',
        padding: 10,
        borderRadius: 5,
        marginTop: 40,
        marginBottom: 80,
    },
    profilePhoto: {
        // position: 'relative',
        // top: 175,
        alignSelf: 'center',
        width: 250,
        height: 150,
        // borderRadius: 75,
        marginBottom: 10,
        marginTop: 40
    },
    msgContainer: {
        position: 'absolute',
        top: 530,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 10,
    },
    msg: {
        fontSize: 24,
        color: 'white',
    },
});

export default ProfilePhoto;