import React from 'react'
import { Link } from 'react-router-dom'

const InnerBanner = () => {
    const pathname =window.location.pathname
    return (
        <>
            <div className="slider-item last-slide">
                <div className="d-flex align-items-center justify-content-center w-100" style={{ height: "100vh" }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                            <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                <h1 className="mb-3 mt-5 bread text-capitalize">{pathname.slice(1,100)}</h1>
                                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>{pathname.slice(1,100)}</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnerBanner
