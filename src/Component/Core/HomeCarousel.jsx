import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { BannerApi } from '../../Redux/Slices/HomeDataSlice';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
    const dispatch = useDispatch()
    const { banner, customer, menu, blog } = useSelector((state) => {
        // console.log(state?.Home?.banner);
        return state?.Home
    })
    useEffect(() => {
        dispatch(BannerApi())
    }, [])
    return (
        <>
            <section className="home-slider  img" style={{ "background-image": "url(images/bg_1.jpg)", "height": "90vh" }}>
                <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={true} loop={true} autoplay={true} smartSpeed={1500} navText={['<i className="bi bi-chevron-left"></i>', '<i className="bi bi-chevron-right"></i>']}>
                    {
                        banner && banner.map((e) => {
                            return (
                                <>
                                    <div className="d-flex align-items-center justify-content-center w-100" style={{ height: "100vh" }}>
                                        <div className="slider-item">
                                            <div className="overlay"></div>
                                            <div className="container">
                                                <div className="row slider-text align-items-center" data-scrollax-parent="true">

                                                    <div className="col-md-6 col-sm-12 ftco-animate">
                                                        <span className="subheading">{e.subtitle}</span>
                                                        <h1 className="mb-4">{e.title}</h1>
                                                        <p className="mb-4 mb-md-5">{e.content}</p>
                                                        <div className="d-flex">
                                                            <Link to="/menu" className="btn btn-primary p-3 px-xl-4 py-xl-3 mx-4">Order Now</Link>
                                                            <Link to="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ms-4">View Menu</Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ftco-animate">
                                                        <img src={e.img} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="slider-item last-slide">
                        <div className="d-flex align-items-center justify-content-center w-100" style={{ height: "90vh" }}>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                    <div className="col-md-7 col-sm-12 text-center ftco-animate">
                                        <span className="subheading">Welcome</span>
                                        <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
                                        <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3 mx-4">Order Now</a>
                                            <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ms-4">View Menu</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        </>
    )
}

export default HomeCarousel