import React from "react";
import "./Button.css";

export function MiBoton({children}){
    return (
        <div className="content-but">
            <button className="bot1">{children}</button>
        </div>
    );
};

export function MiBotonDos({children}){
    return (
        <div className="content-but">
            <button className="bot2">{children}</button>
        </div>
    );
};