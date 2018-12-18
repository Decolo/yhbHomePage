import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import TopNav from '@/components/topNav'
import Footer from '@/components/footer'
import Routes from '@/routes/routes'

import '@/style/normalize.css'
import '@/style/reset.css'
import '@/style/style.scss'

const App = () => {
  return (
    <div className="app">
      <TopNav />
      <Routes />
      <Footer />
    </div>
  )
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

module.hot.accept()