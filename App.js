import React from "react"
import Navbar from "./components/navbar"
import Quote from "./components/quote";
import Questions from "./components/questions";
import Extra from "./components/extra";
function App() {
  return (
  <>
    <Navbar />

  <main className="max-w-4xl mx-auto">

      <Quote />
      <Questions />
      <Extra />

  </main>
</>
  );
}

export default App;
  

