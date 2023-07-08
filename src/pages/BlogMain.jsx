import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BlogApi } from '../Redux/Slices/HomeDataSlice'
import Navbar from '../Component/Common/Navbar'
import InnerBanner from '../Component/Core/InnerBanner'
import Footer from '../Component/Common/Footer'
const BlogMain = () => {
  const dipatch = useDispatch()
  const [page1, setpage1] = useState(0)
  const [page2, setpage2] = useState(3)
  const { blog } = useSelector((state) => {
    console.log(state?.Home?.blog);
    return state?.Home
  })
  const handelClick = () => {
    setpage1(page1 + 3)
    setpage2(page2 + 3)
  }
  const handelBack = () => {
    setpage1(page1 - 3)
    setpage2(page2 - 3)
  }
  useEffect(() => {
    dipatch(BlogApi())
  }, [])
  return (
    <>
      <Navbar />
      <InnerBanner/>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Read our blog</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className="row d-flex">
            {
              blog.slice(page1, page2)?.map((e) => {
                return (
                  <>
                    <div className="col-md-4 d-flex ftco-animate">
                      <div className="blog-entry align-self-stretch">
                        <Link to={`/singleblog/${e.id}`} className="block-20" style={{ "background-image": `url(${e.img})` }}>
                        </Link>
                        <div className="text py-4 d-block">
                          <div className="meta">
                            <div><Link to={`/singleblog/${e.id}`}>{e.date}</Link></div>
                            <div><Link to={`/singleblog/${e.id}`}>Admin</Link></div>
                            <div><Link to={`/singleblog/${e.id}`} className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                          </div>
                          <h3 className="heading mt-2"><Link to={`/singleblog/${e.id}`}>{e.title}</Link></h3>
                          <p>{e.content.slice(0, 100)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }

          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><button onClick={handelBack} className='cstm' disabled={page1 === 0}>&lt;</button></li>
                  <li className="active " onClick={handelBack}><span>1</span></li>
                  <li><a onClick={handelClick}>2</a></li>
                  <li><button onClick={handelClick} className='cstm'>&gt;</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default BlogMain