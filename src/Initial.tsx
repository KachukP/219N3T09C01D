import React,{Suspense} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/Router";
import { Provider } from "jotai";

(function InitialApp(){
    const Container = document.getElementById("hola-ejemplo");
    if(Container){
        const Root = createRoot(Container);
        Root.render(
            <Provider>
                <Suspense fallback={null}>
                    <BrowserRouter>
                        <AppRouter/>
                    </BrowserRouter>
                </Suspense>    
            </Provider>
        );
    };
})();