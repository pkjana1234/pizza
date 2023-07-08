import React from 'react'
import { Link } from 'react-router-dom'
import Details from '../Component/Core/Details'
import Navbar from '../Component/Common/Navbar'
import InnerBanner from '../Component/Core/InnerBanner'
import Footer from '../Component/Common/Footer'

const About = () => {
	return (
		<>
			<Navbar />
			<InnerBanner />
			<Details />
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-3">
						<div className="col-md-7 heading-section ftco-animate text-center">
							<h2 className="mb-4">Our Chef</h2>
							<p className="flip"><span className="deg1"></span><span className="deg2"></span><span className="deg3"></span></p>
							<p className="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
							<div className="staff">
								<div className="img mb-4" style={{ "background-image": "url(images/person_1.jpg)" }}></div>
								<div className="info text-center">
									<h3><a href="teacher-single.html">Tom Smith</a></h3>
									<span className="position">Hair Specialist</span>
									<div className="text">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
							<div className="staff">
								<div className="img mb-4" style={{ "background-image": "url(images/person_2.jpg)" }}></div>
								<div className="info text-center">
									<h3><a href="teacher-single.html">Mark Wilson</a></h3>
									<span className="position">Beard Specialist</span>
									<div className="text">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
							<div className="staff">
								<div className="img mb-4" style={{ "background-image": "url(images/person_3.jpg)" }}></div>
								<div className="info text-center">
									<h3><a href="teacher-single.html">Patrick Jacobson</a></h3>
									<span className="position">Hair Stylist</span>
									<div className="text">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
							<div className="staff">
								<div className="img mb-4" style={{ "background-image": "url(images/person_4.jpg)" }}></div>
								<div className="info text-center">
									<h3><a href="teacher-single.html">Ivan Dorchsner</a></h3>
									<span className="position">Beard Specialist</span>
									<div className="text">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</>
	)
}

export default About