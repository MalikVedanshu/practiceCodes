import React,{useState} from "react";
import axios from 'axios';
import Navbar from './navbar';


export default function Feature() {
    const [memberName, setMemberName] = useState("");
    const [selectedFile, setSelectedFile] = useState([]);
    const [displayMessage, setDisplayMessage] = useState(["",""])
    
    const uploadSelectedFile = async (eve) => {
        try {
            if(selectedFile == null || memberName === null) {
                setDisplayMessage(["You cannot leave input blank","red"])
                setTimeout(() => {
                    setDisplayMessage(["",""]);
                    setSelectedFile([])
                },2000)
            } else {
                setDisplayMessage(["Files Successfully Uploaded","green"])
                setTimeout(() => {
                    setDisplayMessage(["",""]);
                },2000)
                console.log(selectedFile);
                let req = await axios.post("http://192.168.1.42:5000/addthefile", selectedFile)
                
                console.log(req.data);
                
                
            }
        }
        catch(error) {
            console.log(error);
        }
        
    }

    const selectafile = (e) => {
        if(e.target.value !== null || e.target.value !== undefined || e.target.value !== "") {
            console.log(e.target.files[0]);
            const file = e.target.files[0]
            let reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                setSelectedFile([e.target.result]);
                console.log(selectedFile);
            }
            reader.readAsDataURL(file);
        }
        
        
    }

    return(
        <>
        <Navbar />
            <h1>New feature below </h1>
            
            <h3 style={{color:displayMessage[1]}}>{displayMessage[0]}</h3>
            <input type="text" placeholder= "Member Name" onChange={(e) => setMemberName(e.target.value)} />
            <input type="file" accept=".doc, .pdf, .jpg, .jpeg, .png" data-max-size="4024" onChange = {selectafile} /> <br />
            <input type='button' onClick={uploadSelectedFile} value="submit data" />
        </>
    )
}