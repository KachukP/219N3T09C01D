import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import "./Layout.css";

const CabezaCSS = {border: "solid 4px rgb(94, 52, 141)"};
const CuerpoCSS = {flex:"1",backgroundColor:"rgb(131, 236, 255)",border: "double 10px rgb(0, 110, 220)",padding:"80px 20px"};
const PiezCSS = {border: "solid 4px rgb(195, 51, 183)",marginTop: "auto"};

function LayoutPage(){
    const [RootCSS,setRootCSS] = useState({backgroundColor:"rgb(47, 164, 88)",border: "solid 4px rgb(0, 74, 26)"});
    function ClickHandler(){
        setRootCSS({backgroundColor:"blue",border:"solid 8px white"})
    };
    return(
        <div className="root-one">
            <div style={RootCSS} onClick={ClickHandler}>
                <header className="cabezal" style={CabezaCSS}>
                    <p>HEADER</p>
                    <SearchForm P_StyleCSS={{backgroundColor:"pink",border:"solid 4px red"}}/>
                </header>
                <main style={CuerpoCSS}>
                    <Outlet />
                </main>
                <footer className="piezal" style={PiezCSS}>FOOTER</footer>
            </div>
        </div>
    );
};

export {LayoutPage};