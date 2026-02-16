import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useAtom } from "jotai";

const QueryAtom = atom("");

const ResultStateQuery = atom(async(get)=>{
    const ValorQuery = get(QueryAtom);
    try{
        const RespuestaFetch = await fetch("https://fakestoreapi.com/products");
        if(!RespuestaFetch.ok) throw new Error ("Error en la API");
        const ValJson = await RespuestaFetch.json();
        if(!ValorQuery) return ValJson;
        return ValJson//.filter((p)=>{p.title.toLowerCase().includes(ValorQuery.toLowerCase());});
    }catch(error){
        console.log(error);
        return [];
    };
});

export function UseSearchResultFun(){
    const ParamUSRF = useParams();
    const P_QUERY = ParamUSRF.query;

    const [QueryVal,setQueryVal] = useAtom(QueryAtom);
    const [ResultVal] = useAtom(ResultStateQuery);

    useEffect(()=>{
        if(P_QUERY){
            console.log(P_QUERY);
            setQueryVal(P_QUERY);
        }; 
    },[P_QUERY]);

    return ResultVal;
};