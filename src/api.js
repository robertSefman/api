import React, { useState, useEffect } from "react"
import catGif from "./images/cat.gif"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState("")

  const fetchCats = async () => {
    try {
   //   const response = await fetch(`https://api.thecatapi.com/v1/images/search`)

   const url = `http://localhost/apiV2/loginmobile?user=robert@epodjetnik.com&pin=123321`
  //  const url = `https://e-podjetnik.com/apiV2/loginmobile?user=robert@epodjetnik.com&pin=123321`
   // const url = `https://e-podjetnik.com/apiV2/registermobile?code=7075-4477-2257-4229`
      // const url = `https://e-podjetnik.com/apiV2/registermobile?user=robert@epodjetnik.com&pin=123321`
      // const url = `https://e-podjetnik.com/apiV2/financialdata?year=2021`
      const response = await fetch(url,
      {
        method: "GET",
        // mode: 'cors',
        //referrerPolicy: 'no-referrer',
        headers: {
          "X-Api-Key": "mOX8EB669mAujaWH8LlzQz6JHeRCFviS",
          //"Content-Type": "application/json",
        },
      })
      
      // const url = `https://e-podjetnik.com/apiV2/registermobile?code=7075-4477-2257-4229`
      // const response = await fetch(url,
      // {
      //   method: "GET",
      //   headers: {
      //    },
      //  }) 
     
      let catData = await response.json()
      console.log('DATA: ', catData)
      setIsLoading(false)
      return catData[0].url
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData = async () => {
    await fetchCats().then(result => setData(result))
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  fetchData()

  const LoadingSpinner = () => <img alt = 'cat'src={catGif} />
  return <>{isLoading ? <LoadingSpinner /> : <img alt='cat' src={data} />}</>
}
export default App
