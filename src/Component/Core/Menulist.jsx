import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuApi } from '../../Redux/Slices/HomeDataSlice'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import AxiosHome from '../../Axios/AxiosHomeInstance';
const Menulist = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [menudata, setmenudata] = useState([])
    const [page1, setpage1] = useState(0)
    const [page2, setpage2] = useState(6)
    const { menu } = useSelector((state) => {
        return state?.Home
    })

    const handelClick = (catagory) => {
        const catData = menu && menu.filter((e) => {
            return (
                e.category == catagory
            )
        })
        setData(catData)
    }
    const menuPaginateData = async () => {
        const res = await AxiosHome.get(`menu?_limit=6&_page=1`)
        setmenudata(res?.data)
    }
    const handlePageClick = async (data) => {
        const res = await AxiosHome.get(`menu?_limit=6&_page=${data.selected + 1}`)
        setmenudata(res?.data)
    }
    const handelBack = () => {
        setpage1(page1 - 6)
        setpage2(page2 - 6)
    }
    const handelforClick = () => {
        setpage1(page1 + 6)
        setpage2(page2 + 6)
    }
    useEffect(() => {
        menuPaginateData()
        dispatch(MenuApi())
    }, [])
    return (
        <>
            <div className="container-fluid px-md-5 py-5">

                <div className="row">
                    <div className="col-md-2">
                        <div className="filter-div">
                            <ul>
                                <li><button onClick={() => { handelClick('Pizza') }}>PIZZA</button></li>
                                <li><button onClick={() => { handelClick('Drinks') }}>DRINKS</button></li>
                                <li><button onClick={() => { handelClick('Burgers') }}>BURGER</button></li>
                                <li><button onClick={() => { handelClick('Pasta') }}>PASTA</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h1 className="fw-bold text-center">Our All Menu</h1>
                        <div className="row">
                            {
                                data === null ?
                                    <>
                                        {
                                            menudata && menudata?.map((e) => {
                                                return (
                                                    <>
                                                        <div className="col-md-4 mt-4">
                                                            <div className="card menu-card" style={{ border: 0 }}>
                                                                <div className="menu-card-img">
                                                                    <img src={e.img} style={{ height: '300px', objectFit: 'cover' }} className='img-fluid card-img-top' alt="" srcset="" />
                                                                    <div className="float-cat text-center">
                                                                        <h3 className="fw-bold text-center">Rs. {e.price} only/-</h3>
                                                                        <Link to={`/singlemeal/${e.id}`}><button className=' btn btn-outline-warning'>Grab it now!</button></Link>
                                                                    </div>
                                                                    <p>{e.category}</p>
                                                                </div>
                                                                <div className="card-body">
                                                                    {/* <h1 className='text-dark'>{e.id}</h1> */}
                                                                    <h4 className='text-dark'>{e.title}</h4>
                                                                    <p className="text-mute">{e.subtitle}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        <ReactPaginate
                                            breakLabel="..."
                                            nextLabel="next >"
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={5}
                                            pageCount={menu.length / 6}
                                            previousLabel="< previous"
                                            renderOnZeroPageCount={null}
                                            containerClassName='pagination mx-auto mt-5'
                                            pageClassName='page-item'
                                            pageLinkClassName='page-link'
                                            previousClassName='page-item'
                                            previousLinkClassName='page-link'
                                            nextClassName='page-item'
                                            nextLinkClassName='page-link'
                                            activeClassName='active'
                                        />

                                    </>
                                    :
                                    <>
                                        {
                                            data && data.slice(page1, page2)?.map((e) => {
                                                return (
                                                    <>
                                                        <div className="col-md-4 mt-4">
                                                            <div className="card menu-card" style={{ border: 0 }}>
                                                                <div className="menu-card-img">
                                                                    <img src={e.img} style={{ height: '300px', objectFit: 'cover' }} className='img-fluid card-img-top' alt="" srcset="" />
                                                                    <div className="float-cat text-center">
                                                                        <h3 className="fw-bold text-center">Rs. {e.price} only/-</h3>
                                                                        <Link to={`/singlemeal/${e.id}`}><button className=' btn btn-outline-warning'>Grab it now!</button></Link>
                                                                    </div>
                                                                    <p>{e.category}</p>
                                                                </div>
                                                                <div className="card-body">
                                                                    {/* <h1 className="text-dark">{e.id}</h1> */}
                                                                    <h4 className='text-dark'>{e.title}</h4>
                                                                    <p className="text-mute">{e.subtitle}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        <div className="col-md-12 mt-5">
                                            <div className="">
                                                <div className="block-27 d-flex justify-content-center">
                                                    <ul>
                                                        <li><button onClick={handelBack} className='cstm' disabled={page1 === 0}>&lt;</button></li>
                                                        <li className="active " onClick={handelBack}><span>1</span></li>
                                                        <li><a onClick={handelforClick}>2</a></li>
                                                        <li><button onClick={handelforClick} className='cstm' disabled={page2 === 12}>&gt;</button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menulist
