// create your App component here
import { useState,useEffect } from "react";


function App(){
    const[imgInPlace,setImgInPlace]=useState(false)
    const[isLoaded,setisLoaded]=useState(false)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((data)=>{
            setImgInPlace(data.message)
            setisLoaded(true)
            console.log ('render')
        })
    },[]);

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return <img src={imgInPlace} alt ="A Random Dog" />
}


export default App;