import React from "react";
import { useNavigate } from "react-router-dom";
import { UseSearchResultFun } from "Hooks/Hooks";
import { MiBoton } from "UI/Button/Button";
import { MiTexto } from "UI/Text/TextField";
import "./SearchForm.css"

function SearchForm({P_StyleCSS}){
    const NavegateValFun = useNavigate();
    const ResultVal = UseSearchResultFun()||[];
    function HandleSubmitFun(e){
        e.preventDefault();
        const QueryVal = e.target.query.value;
        NavegateValFun("/search/"+QueryVal);
    };

    return(
        <div className="root-search">
            <form onSubmit={HandleSubmitFun} style={P_StyleCSS}>
                <MiTexto name="query"/>
                <MiBoton>Buscar</MiBoton>
            </form>
        </div>    
    );
};

export {SearchForm};