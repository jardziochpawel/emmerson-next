import {useState, useEffect} from 'react';

import {PREFIX} from '../constants/data';

function useLocalStorage(key, initialValue) {

    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        let jsonValue = null;
        if(typeof window !== "undefined"){
            jsonValue = localStorage.getItem(prefixedKey);
        }
        if(jsonValue != null){
            return JSON.parse(jsonValue);
        }
        if(typeof initialValue === "function"){
            return initialValue();
        }
        else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value]);

    return [value, setValue];
}

export default useLocalStorage;