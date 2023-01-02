import React,{useState} from "react";
import Navbar from './navbar';


export default function Feature() {
    const [memberName, setMemberName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayMessage, setDisplayMessage] = useState(["",""])
    
    const uploadSelectedFile = async (eve) => {
        if(selectedFile == null || memberName === null) {
            setDisplayMessage(["You cannot leave input blank","red"])
            setTimeout(() => {
                setDisplayMessage(["",""]);
            },2000)
        } else {
            setDisplayMessage(["Files Successfully Uploaded","green"])
            setTimeout(() => {
                setDisplayMessage(["",""]);
            },2000)
            console.log(selectedFile);
            // await axios.post("/postfile", {memberName: memberName, file: selectedFile});
        }
    }

    const selectafile = (e) => {
        if(e.target.value !== null || e.target.value !== undefined || e.target.value !== "") {
            console.log(e.target.files[0]);
            const file = e.target.files[0]
            let reader = new FileReader();
            reader.onload = function(e) {
                console.log(e.target.result);
                setSelectedFile(e.target.result);
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
            <input type="file" accept=".doc, .pdf, .jpg, .jpeg, .png" onChange = {selectafile} /> <br />
            <input type='submit' onClick={uploadSelectedFile} />
        </>
    )
}