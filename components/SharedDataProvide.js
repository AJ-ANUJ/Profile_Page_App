import React, {useState} from 'react';
import DataContext from './SharedDataContext';

const DataProvider = ({ children }) => {
    const[name, setName] = useState('Approachable Geek');
    const[phone, setPhone] = useState('xxx-xxx-xxxx');
    const[email, setEmail] = useState('approachablegeek@example.com');
    const[tmay, setTMAY] = useState('We build software humans love to use. We\'re software development geeks who speak “business”, so you don\'t have to speak “geek”.');
    const[profilePhoto, setProfilePhoto] = useState('./ag.png');

    return (
        <DataContext.Provider value={{ name, setName, phone, setPhone,
        email, setEmail, tmay, setTMAY, profilePhoto, setProfilePhoto }}>
          {children}
        </DataContext.Provider>
      );
    };
    
    export default DataProvider;