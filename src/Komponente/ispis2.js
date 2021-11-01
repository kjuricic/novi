import React from "react";

const Statistic=({text,good,neutral,bad})=>{
    // let good={good};
    // let neutral={neutral};
    // let bad={bad};
    let max=good+neutral+bad;
    let positive=good+neutral;
    let result=(positive/max)*100;
    return(
        <div>
            <p>{text}: {result} %</p>
        </div>
    );
}
export default Statistic;