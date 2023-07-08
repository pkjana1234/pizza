import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'

const SingleBlog = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const fetchSingleData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/${id}`)
        setData(res?.data)
    }
    useEffect(() => {
        fetchSingleData()
    }, [])
    console.log(data);
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="fw-bold text-white text-center">{data.title}</h1>
                <div className="singleblog-img">
                    <img src={`${data.img}`} className='img-fluid' alt="" srcset="" />
                </div>
                <div className="text py-4 d-block">
                    <div className="meta d-flex">
                        <div><a>{data.date}</a></div>
                        <div className='mx-2'><a>Admin</a></div>
                        <div><a className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                    </div>
                    <h3 className="heading mt-2"><a>{data.title}</a></h3>
                    <p>{data.content}</p>
                    <p>{data.subcontent}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog
