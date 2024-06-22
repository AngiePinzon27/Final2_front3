import { createContext, useContext, useState, useEffect } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

const dentistContext = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DENTIST":
            return{...state, dentist: action.payload};
        case "ADD_FAVS"
            return {...state, favs: [...state.favs, action.payload]};
        case "TOGGLE_THEME":
            return  {};
        defaul:
          throw new Error("Error al modificar el estado") 
    }
};

const initialState = {
    dentist: [],
    favs: lsFavs,
    theme: "",
};

const Context = ({children}) => {
    const [favs, setFavs] = useState(lsFavs);
    console.log(favs);
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    useEffect(() =>{
        localStorage.setItem("favs", JSON.stringify(state.cart));

    }, [state.favs]);

    const getDentist = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        dispatch({ type: "GET_DENTIST", payload: data });
    };

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(favs));
    }, [favs]);
      getDentist();
    }, []);

    return (
        <dentistContext.Provider value={{ favs, setFavs}}>
        <dentistContext.Provider value={{ state, dispatch}}>
            {children}
          </dentistContext.Provider>
    );

