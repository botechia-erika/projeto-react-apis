import React, {useState, useEffect} from "react";
import axios from "axios";

export const useCaptureUsername=()=>{
const BASE_URL_POKEDEX = '/pokedex/'   
const [idUsername, setIdUsername] = useState([])
const [postUsers, setPostUsers] = useState([])

useEffect(()=>{
    axios
    .get(`${BASE_URL_POKEDEX}${idUsername}`)
    .then((response) =>{
        setIdUsername(response.data);
    })
        .catch((error)=>{
            console.log(error)
        });  
    }, []);
    return(
        <div>
            <h1>Username Context</h1>
        </div>
    )
};

