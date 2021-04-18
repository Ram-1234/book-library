import React,{useState} from 'react';



export default function Mode() {
    let col=document.getElementsByClassName("bookhome").innerHTML.style.backgroundColor;
    let [color,setColor]=useState(col);
    
    function colorChange(){
        if(color==='white'){
            document.getElementsByClassName("bookhome").innerHTML.style.backgroundColor='black';
            color="black";
            setColor(color);
        }else{
            document.getElementsByClassName("bookhome").innerHTML.style.backgroundColor='white';
            color="white";
            setColor(color);
        }
    }

    return (
        <div>
            <h4 onClick={colorChange} style={{backgroundColor:{color}}}>Black Mode</h4>
        </div>
    )
}
