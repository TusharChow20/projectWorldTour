// import { useState } from 'react'
import Countries from './components/Countries'
import './App.css'
import { Suspense } from 'react'
const countyPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json())


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>React world</h1>
      <Suspense fallback={<p>Loading is Leading.....</p>}>
        <Countries countyPromise={countyPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
