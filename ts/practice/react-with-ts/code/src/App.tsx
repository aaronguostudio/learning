import React from "react"
import { BrowserRouter, Route, NavLink } from "react-router-dom"

import "./app.css"
import IgnoreImportTypes from "./pages/IgnoreImportTypes"
import UseJsComponent from "./pages/UseJsComponent"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='left'>
          <NavLink
            className='menu'
            activeClassName='menu-active'
            to='/ignore-import-types'
          >
            <div>Ignore Import Types</div>
          </NavLink>
          <NavLink
            className='menu'
            activeClassName='menu-active'
            to='/use-js-component'
          >
            <div>Use JS Component</div>
          </NavLink>
        </div>
        <div className='right'>
          <Route
            exact
            path='/ignore-import-types'
            component={IgnoreImportTypes}
          />
          <Route exact path='/use-js-component' component={UseJsComponent} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
