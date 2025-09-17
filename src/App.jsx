import React from 'react'
import Header from './components/Header'
import Routine from './components/Routine'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <div className="shell">
        <Header />
        <main className="content">
          <Routine />
        </main>
        <Footer />
      </div>
    </div>
  )
}
