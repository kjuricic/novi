import React from "react";

const Ispis2=({text,dobro,neutralno,lose})=>{

    let max=dobro+neutralno+lose;
    let positive=dobro+neutralno;
    let result=(positive/max)*100;
    return(
        <div>
            <p>{text}: {result} %</p>
        </div>
    );
}
export default Ispis2;
