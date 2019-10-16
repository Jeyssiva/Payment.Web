import React from 'react'
var leftmenus = require('../../constants/leftmenus.json')

class LeftContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={"sidebar-logo"}>
                            <img alt={"SelectTV Logo"} className={"logo"}
                                src={"https://filestoragesample.s3.ap-south-1.amazonaws.com/logo.png"}/>
                </div>

                <nav id="sidebar">
                    
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" 
                            className="dropdown-toggle">Travel</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Bus</a>
                                </li>
                                <li>
                                    <a href="#">Train</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" 
                            className="dropdown-toggle">Recharge and Payment</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Mobile</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default LeftContainer