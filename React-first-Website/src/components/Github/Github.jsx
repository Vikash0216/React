import React, { useState, useEffect, } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Vikash0216')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div>
            <div className="text-center text-5xl my-2 p-4 font-bold">
                Welcome to my Github
            </div>
            <div className="flex justify-center items-center flex-col py-5 my-2">
            <div className="img">
                <img className='w-60 h-60 border rounded-full' src={data.avatar_url} alt="Github profile" />
            </div>
            <div className="details flex gap-6 text-3xl">
                <div>
                Name: {data.name} ||
                </div>
                <div>
                Bio: {data.bio} ||
                </div>
                <div>
                Followers: {data.followers} ||
                </div>
                </div>
                </div>
            </div>
    )
}

export default Github

export const gitInfoLoader = async ()=>{
 const response = await fetch('https://api.github.com/users/Vikash0216')
 return response.json()
}



