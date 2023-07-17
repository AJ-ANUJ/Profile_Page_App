import React, {useState, useEffect} from "react";
import {Text} from 'react-native';

const DisplayMessage = ({msg}) => {
    const [showMessage, setShowMessage] = useState(false);    
    setShowMessage(true);
    useEffect(() => {
        if(showMessage) {
            const timeout = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [showMessage]);

    return (
        <View>
            {showMessage&&<Text>{msg}</Text>}
        </View>
    )
};

export default DisplayMessage;
