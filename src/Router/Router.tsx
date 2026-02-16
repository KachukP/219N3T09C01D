import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "Components/Layout/Layout";
import { AppInicial } from "Pages/Home/App";
import { SearchResultPage } from "Pages/SearchResult";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<AppInicial />}/>
                <Route path="/search/:query" element={<SearchResultPage />}/>
            </Route>
        </Routes>
    );
};

export {AppRouter};