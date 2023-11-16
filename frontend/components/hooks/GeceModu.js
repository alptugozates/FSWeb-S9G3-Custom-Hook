import { useState, useInput } from "react";
import localStorageKullan from "./localStorageKullan";

const GeceModu = (initialValue) => {
    const [geceModu, setGeceModu] = localStorageKullan(initialValue);

    const { setItem, getItem } = localStorageKullan(getItem("geceModu"));

    const toggleMode = e => {
        // e.preventDefault();
        setItem("geceModu", !geceModu);
        setGeceModu(getItem("geceModu"));
    };

    return { geceModu, toggleMode };

};
export default GeceModu;