import { useState } from "react";

const localStorageKullan = (key, value) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item)
        }
        else {
            localStorage.setItem(key, JSON.stringify(value));
            return value;
        }


    })

    const setLocalStorageHandler = (newValue) => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }


    return [storedValue, setLocalStorageHandler];


}

export default localStorageKullan;