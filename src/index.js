import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Tipka from "./Komponente/tipka"
import Ispis1 from "./Komponente/ispis1";
import Ispis2 from "./Komponente/ispis2";



const App=()=>{
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);
  const [flag,setFlag]=useState(false);

  const set1=()=>setGood(good+1);
  const set2=()=>setNeutral(neutral+1);
  const set3=()=>setBad(bad+1);
  const set4=()=>setFlag(true);

  console.log(good,neutral,bad);
  return(
    <div>
      <h1>Ocijenite našu uslugu : </h1>
      <Tipka text="Dobro" funct={set1} flag={set4}/>
      <Tipka text="Neutralno" funct={set2} flag={set4}/>
      <Tipka text="Loše" funct={set3} flag={set4}/>
      <h2>Rezultati:</h2>
      {flag ? (
        <>
        <Ispis1 text="Dobro" val={good}/>
        <Ispis1 text="Neutralno" val={neutral}/>
        <Ispis1 text="Loše" val={bad}/>
        <Ispis2 text="Pozitivno" good={good} neutral={neutral} bad={bad} />
        </>
      ):(<p>Nema rezultata</p>)}
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))