import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
//import userStore from './stores/userStore'
import BasePage from './src/basepage'
import './styles/layout.scss'
//import './styles/main.css'

const stores = {
   // userStore
}

ReactDOM.render((
    <Provider {...stores}>
        <BasePage />
    </Provider>
  ), document.getElementById('root'));
  