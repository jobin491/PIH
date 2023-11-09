import React from 'react'

const  Quote=()=> {
  return (
    <div> 
      <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12" >
        <article className="sm:w-1/2">
    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
    Every accomplishment starts{" "}
    <span className="text-indigo-700 dark:text-indigo-300">
      {" "}
      with the decision to try.{" "}
    </span>
    </h2>
    <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
        Practice our free tests to review yourself now.
    </p>
    </article>
        <img className="w-1/2 rounded-full" src="./studyImg.jpg.webp"/>
      </section>
    </div>
  )
}

export default Quote