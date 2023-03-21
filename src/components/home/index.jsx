import React from 'react'
import {useNavigate} from "react-router-dom"
const HomeComponent = ({value}) => {
    const navigate = useNavigate()
    const backLogin=()=>{
        navigate(-1)
    }
  return (
    <>
    <div>Day la trang home</div>
    <button onClick={backLogin}>back</button>
    </>
  )
}

export default HomeComponent