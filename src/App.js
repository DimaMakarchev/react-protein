import React from "react";
import './App.css';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {HeaderBr} from "./BRO/ComponentsTaskForBr/HeaderTaksBRState/Header/HeaderBr";
import {FooterBr} from "./BRO/ComponentsTaskForBr/FooterTaksBRState/Footer/FooterBr";
import ProteinComponentMemo from "./BRO/ComponentsTaskForBr/ProteinComponent/ProteinComponentMemo";

import {PaginationComponent} from "./BRO/ComponentsTaskForBr/PaginationComponent/PaginationComponent";
import {HockFor} from "./BRO/ComponentsTaskForBr/hock/Hocks";

// const PaginationComponent = React.lazy(() => import("./BRO/ComponentsTaskForBr/PaginationComponent/Page.jsx"));

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <HeaderBr/>
                <div className='menu'>
                    <Route path='/protein' render={HockFor(ProteinComponentMemo)}/>
                    <Route path='/pagination' render={HockFor(PaginationComponent)}/>
                    <Route path='/'/>
                </div>
                <FooterBr/>
            </div>
        </BrowserRouter>

    )
        ;
}

export default App;
