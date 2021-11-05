import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Tipka from "./Komponente/tipka"
import Ispis1 from "./Komponente/ispis1";
import Ispis2 from "./Komponente/ispis2";


const App=()=>{

  function prviprikaz(props) {
    return <div>
    <h1>Ocijenite našu uslugu : </h1>
    
    <p>
    <Tipka text="Dobro" funct={fun1} flag={fun4}/>
    <Tipka text="Neutralno" funct={fun2} flag={fun4}/>
    <Tipka text="Loše" funct={fun3} flag={fun4}/>
    </p>
    <h2>Rezultati:</h2>
    <p>Nema rezultata</p></div>;
  }

  function drugiprikaz(props) {
    return <div>
    <h1>Ocijenite našu uslugu : </h1>
    
    <p>
    <Tipka text="Dobro" funct={fun1} flag={fun4}/>
    <Tipka text="Neutralno" funct={fun2} flag={fun4}/>
    <Tipka text="Loše" funct={fun3} flag={fun4}/>
    </p>
    <h2>Rezultati:</h2>
    <Ispis1 text="Dobro" val={dobro}/>
        <Ispis1 text="Neutralno" val={neutralno}/>
        <Ispis1 text="Loše" val={lose}/>
        <Ispis2 text="Pozitivno" dobro={dobro} neutralno={neutralno} lose={lose} /></div>;
  }

  const [dobro,postaviDobro]=useState(0);
  const [neutralno,postaviNeutralno]=useState(0);
  const [lose,postaviLose]=useState(0);
  const [flag,setFlag]=useState(false);

  const fun1=()=>postaviDobro(dobro+1);
  const fun2=()=>postaviNeutralno(neutralno+1);
  const fun3=()=>postaviLose(lose+1);
  const fun4=()=>setFlag(true);

 
  if (!flag) {
    return prviprikaz();
  }
  return drugiprikaz();
}
      
    
ReactDOM.render(<App />, document.getElementById('root'))