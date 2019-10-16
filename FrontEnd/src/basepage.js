import React from 'react';
import '../styles/layout.css'
//import {ThroughProvider} from 'react-through';
import {BrowserRouter, Router, Link, Switch,Route} from "react-router-dom";
import LeftContainer from './layout/left/leftcontainer';

class BasePage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
         return (
            <BrowserRouter >
               <div className={'main-container'}>
                    <div className={'left-side '} >
                         <LeftContainer/>
                     </div>
               </div> 
                    {/* <div className="search-bar-wrapper">
                        <SearchBar {...this.props}/>
                   </div>
                    <div className={'content-side'}>  
                  <div className="content-dynamic" >
                           {routes()}
                      </div>
                   </div>
                   <div className={'right-side '} >
                        <RightContainer/>
                    </div> */}
               
            </BrowserRouter>
        )
    }
}
export default BasePage;
