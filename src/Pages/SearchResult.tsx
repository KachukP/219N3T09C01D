import React from "react";
import { Link,useParams } from "react-router-dom";
import { UseSearchResultFun } from "Hooks/Hooks";
import { MiBotonDos } from "UI/Button/Button";

function SearchResultPage(){
    const ParamsVals = useParams();
    const ResultVal = UseSearchResultFun();
    return (
        <div>
            <p>RESULTADOS: {ResultVal.length}</p>
            <ul>
                {ResultVal.map((r:any)=>(
                    <li key={r.id}>
                        <Link to={"/item/"+r.id}>
                            <MiBotonDos>{r.title}</MiBotonDos>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export {SearchResultPage};