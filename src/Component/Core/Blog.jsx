import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BlogApi } from '../../Redux/Slices/HomeDataSlice';
import { Link } from 'react-router-dom';

const Blog = () => {
  const dispatch = useDispatch()
  const { banner, customer, menu, blog } = useSelector((state) => {
    // console.log(state?.Home?.banner);
    return state?.Home
  })
  useEffect(() => {
    dispatch(BlogApi())
  }, [])
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-4">Recent from blog</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className="row d-flex">
            {
              blog && blog.slice(0,3).map((e) => {
                return (
                  <>
                    <div className="col-md-4 d-flex ftco-animate">
                      <div className="blog-entry align-self-stretch">
                        <Link to={`/singleblog/${e.id}`} className="block-20" style={{ "backgroundImage": `url(${e.img})` }}>
                        </Link>
                        <div className="text py-4 d-block">
                          <div className="meta">
                            <div><Link to={`/singleblog/${e.id}`}>{e.date}</Link></div>
                            {/* <div><a href="#">Admin</a></div> */}
                            <div className='ms-2'><Link to={`/singleblog/${e.id}`} className="meta-chat ms-2"><span className="icon-chat"></span>{e.comment}</Link></div>
                          </div>
                          <h3 className="heading mt-2"><Link to={`/singleblog/${e.id}`}>The Delicious Pizza</Link></h3>
                          <p>{e.content.slice(0,150)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog