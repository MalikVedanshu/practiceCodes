import React,{useState} from "react";
import Navbar from './navbar';
import axios from "axios";


export default function Feature() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayMessage, setDisplayMessage] = useState(["",""])
    
    const uploadSelectedFile = async (eve) => {
        if(selectedFile == null) {
            setDisplayMessage(["No files are selected","red"])
            setTimeout(() => {
                setDisplayMessage(["",""]);
            },2000)
        } else {
            setDisplayMessage(["Files Successfully Uploaded","green"])
            setTimeout(() => {
                setDisplayMessage(["",""]);
            },2000)
            await axios.post("/postfile", selectedFile);
        }
        
    }
    return(
        <>
        <Navbar />
            <h1>New feature below </h1>
            <h3 style={{color:displayMessage[1]}}>{displayMessage[0]}</h3>
            <input type="file" accept=".doc, .pdf, .jpg, .jpeg, .png" onChange = {(e) =>setSelectedFile(e.target.value) } /> <br />
            <input type='submit' onClick={uploadSelectedFile} />
        </>
    )
}