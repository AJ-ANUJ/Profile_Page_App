import React, {useState} from 'react';
import DataContext from './SharedDataContext';

const DataProvider = ({ children }) => {
    const[name, setName] = useState('First Last');
    const[phone, setPhone] = useState('xxx-xxx-xxxx');
    const[email, setEmail] = useState('example@example.com');
    const[tmay, setTMAY] = useState('Hello!');
    const[profilePhoto, setProfilePhoto] = useState('./default_pic.png');

    return (
        <DataContext.Provider value={{ name, setName, phone, setPhone,
        email, setEmail, tmay, setTMAY, profilePhoto, setProfilePhoto }}>
          {children}
        </DataContext.Provider>
      );
    };
    
    export default DataProvider;