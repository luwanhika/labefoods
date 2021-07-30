import React from 'react'
import Router from './Routes/Router'
import { BrowserRouter } from 'react-router-dom';

// import Header from './components/partials/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
