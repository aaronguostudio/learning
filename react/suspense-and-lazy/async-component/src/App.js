import React, { lazy, Suspense } from "react"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"

import lazyImport from "./components/lazyImport"

// This is sync
// import TestComponent from './components/TestComponent'

// This is async
const TestComponent = lazy(() => import("./components/TestComponent"))

const LoadingMessage = () => {
  console.log("> loading")
  return <div>Loading...</div>
}

const FunComponent = lazyImport("./FunComponent")

const TerribleComponent = lazy(() => import("./components/TerribleComponent"))

function App() {
  return (
    // async load
    // <Suspense fallback={<LoadingMessage />}>
    //   <TestComponent />
    // </Suspense>

    <Router>
      <div>
        <header>
          <nav>
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to='/fun'>Fun</Link>
            </div>
            <div>
              <Link to='/terrible'>Terrible</Link>
            </div>
          </nav>
        </header>

        <br />

        <Suspense fallback={<LoadingMessage />}>
          <Switch>
            <Route path='/fun'>
              <FunComponent />
            </Route>
            <Route path='/terrible'>
              <TerribleComponent />
            </Route>
            <Route>
              <TestComponent />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
