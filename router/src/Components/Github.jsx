import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import { useLoaderData } from 'react-router'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/suryansh2231')
  //   .then(responce=> responce.json())
  //   .then(data=>{
  //     console.log(data),
  //     setData(data)
      
  // })
  // },[])

  return (
    <div className='bg-gray-600 p-4 text-3xl'>
        Github Followers : {data.followers}
    </div>
  )
}

export default Github

export  const loaderInfoData = async () => {
 const responce =  await fetch('https://api.github.com/users/suryansh2231')
 return responce.json()
}