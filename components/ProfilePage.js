import React, {useState, useContext} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import DataContext from './SharedDataContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfilePage = ({navigation}) => {
    const {name, setName, phone, setPhone, email,
        setEmail, tmay, setTMAY, profilePhoto, setProfilePhoto} = useContext(DataContext);
    
    const isLocalPath = profilePhoto && profilePhoto.startsWith('./');
    const imgSource = isLocalPath?require('./ag.png'):{ uri: profilePhoto};
    const handleNamePress = () => {
        navigation.navigate('Name');
    };

    const handlePhonePress = () => {
        navigation.navigate('Phone');
    };

    const handleEmailPress = () => {
        navigation.navigate('Email');
    };

    const handleTMAYPress = () => {
        navigation.navigate('Bio');
    };

    const handleImagePress = () => {
        navigation.navigate('ProfilePhoto');
    };

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <Text style={{
                color: 'purple',
                alignSelf: 'center',
                fontSize: 32,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 10,
            }}>Edit Profile</Text>
            <TouchableOpacity style={styles.container} onPress={handleImagePress}>
                <Image style={styles.profilePhoto} source={imgSource}></Image>
                <Icon style={styles.editIcon} name='pencil-square-o' size={25} color='blue'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={handleNamePress}>
                <View>
                    <Text style={styles.headingText}>Name</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <Icon style={styles.arrowIcon} color='#87CEFA' name='chevron-right' size={25}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={handlePhonePress}>
                <View>
                    <Text style={styles.headingText}>Phone</Text>
                    <Text style={styles.text}>{phone}</Text>
                </View>
                <Icon style={styles.arrowIcon} color='#87CEFA' name='chevron-right' size={25}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={handleEmailPress}>
                <View>
                    <Text style={styles.headingText}>Email</Text>
                    <Text style={styles.text}>{email}</Text>
                </View>
                <Icon style={styles.arrowIcon} color='#87CEFA' name='chevron-right' size={25}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={handleTMAYPress}>
                <View>
                    <Text style={styles.headingText}>Bio</Text>
                    <Text style={styles.text}>{tmay}</Text>
                </View>
                <Icon style={styles.arrowIcon} color='#87CEFA' name='chevron-right' size={25}></Icon>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    container1:{
        backgroundColor: 'white',
        padding: 10,
        margin:7,
        // borderRadius: 5,
        borderBottomColor: 'gray',
        // borderBottomWidth: 2,
        flexDirection: 'row',
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 5,
    },
    profilePhoto: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: '#87CEFA',
        marginBottom: 10,
    },
    headingText: {
        color:'gray',
    },
    editIcon: {
        position: 'absolute',
        top: 10,
        left: 240,
        backgroundColor: 'white',
    },
    arrowIcon: {
        position: 'absolute',
        right:0,
        bottom:15,
        backgroundColor: 'white',
    },
});
export default ProfilePage;