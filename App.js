import React from "react"
import Navbar from "./navbar"
import Quote from "./quote";
import Questions from "./questions";
import Extra from "./extra";
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
  

