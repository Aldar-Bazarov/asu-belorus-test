import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import { App } from './app'

import '@ois-design-ui/components/lib/themes/ois.less'
import './index.css';

const element = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
, element)