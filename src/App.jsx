import React from "react"

function App() {

const x=import.meta.env.VITE_API_KEY;
  return (
    <>
    <h1>The Sentitive Data use .env</h1>
    <h3>Key is : {x}</h3>
    </>
  )
}

export default App
 