import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MenuApi } from '../../Redux/Slices/HomeDataSlice';
import { Link } from 'react-router-dom';

const Meal = () => {
	const dispatch = useDispatch()
	const { menu } = useSelector((state) => {
		// console.log(state?.Home?.banner);
		return state?.Home
	})
	useEffect(() => {
		dispatch(MenuApi())
	}, [])
	return (
		<>

			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-3">
						<div className="col-md-7 heading-section ftco-animate text-center">
							<h2 className="mb-4">Hot Pizza Meals</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>
				</div>
				<div className="container-wrap">
					<div className="row no-gutters d-flex">
						{
							menu && menu.slice(0, 3).map((e) => {
								return (
									<>
										<div className="col-lg-4 d-flex ftco-animate">
											<div className="services-wrap d-flex">
												<a href="#" className="img" style={{ "backgroundImage": `url(${e.img})` }}></a>
												<div className="text p-4">
													<h3>{e.title}</h3>
													<p>{e.subtitle} </p>
													<p className="price"> <Link to={`/singlemeal/${e.id}`} className="ml-2 btn btn-white btn-outline-white">Details</Link></p>
												</div>
											</div>
										</div>
									</>
								)
							})
						}
						{
							menu && menu.slice(3, 6).map((e) => {
								return (
									<>
										<div className="col-lg-4 d-flex ftco-animate">
											<div className="services-wrap d-flex">
												<a href="#" className="img order-lg-last" style={{ "backgroundImage": `url(${e.img})` }}></a>
												<div className="text p-4">
													<h3>{e.title}</h3>
													<p>{e.subtitle} </p>
													<p className="price"><Link to={`/singlemeal/${e.id}`} className="ml-2 btn btn-white btn-outline-white">Details</Link></p>
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

export default Meal