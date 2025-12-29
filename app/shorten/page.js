"use client"
import Link from "next/link"
import React, { useState } from "react"


export default function Page() {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generate, setgenerate] = useState("")

  const generated = async (e) => {
    e.preventDefault()
    setgenerate('') // ✅ prevent form/page reload
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      })

      const result = await response.json()
      
    
      if(result.success){
         setgenerate(`${url}/${shorturl}`)
         alert(result.message)
             seturl("")
      setshorturl("")
         return

      }
      else{
        alert(result.message)
        return
      }

     
     
     
    } catch (error) {
      console.error("Frontend error:", error)
    }
  }

  return (
  <>
  <div className="h-[70vh]">
    <div className="mt-14 flex flex-col gap-2.5 w-[100%]">
      <h1 className="font-bold text-2xl text-center">Generate Short URL</h1>
      <form
        onSubmit={generated}
        className="mx-auto bg-purple-100 p-4.5 py-5 md:w-[500px] w-[90%] flex flex-col gap-2.5 rounded-md"
      >
        <input
          className="bg-white py-2.5 px-1.5 focus:outline-purple-500"
          type="text"
          name="url"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
          required
        />
        <input
          className="bg-white py-2.5 px-1.5 focus:outline-purple-500"
          type="text"
          name="shorturl"
          value={shorturl}
          placeholder="Enter your short URL"
          onChange={(e) => setshorturl(e.target.value)}
          required
        />
        <button type="submit" className="bg-purple-500 py-2.5 px-1.5 text-white">
          Generate
        </button>
         {generate &&(<Link href={generate}>{generate}</Link>)}
      </form>
    
    </div>
    </div>
    </>
  )
}
