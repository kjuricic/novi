import React from 'react'

const Tipka = ({text,funct,flag})=>{
    
    return(
    <div>
        <button onClick={()=>{
            funct();
            flag();
        }}>{text}</button>
    </div>
    
    );
}

export default Tipka;