import React from 'react'
import { useSelector } from 'react-redux'

const Price = () => {
	const { menu } = useSelector((state) => {
		return state?.Home
	})
	return (
		<>

			<div class="container">
				<div class="row justify-content-center py-5">
					<div class="col-md-7 heading-section text-center ftco-animate">
						<h2 class="mb-3">Some of Our Menu Pricing</h2>
						<p class="flip"><span class="deg1"></span><span class="deg2"></span><span class="deg3"></span></p>
						<p class="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row pb-5">
					<div class="col-md-6">
						{
							menu && menu.slice(0, 6).map((e) => {
								return (
									<>
										<div class="pricing-entry d-flex ftco-animate">
											<div class="img" style={{ "background-image": `url(${e.img})` }}></div>
											<div class="desc pl-3">
												<div class="d-flex text align-items-center">
													<h3><span>{e.title}</span></h3>
													<span class="price">Rs. {e.price}/-</span>
												</div>
												<div class="d-block">
													<p>{e.subtitle}</p>
												</div>
											</div>
										</div>
									</>
								)
							})
						}
					</div>


					<div class="col-md-6">
						{

							menu && menu.slice(6, 12).map((e) => {
								return (
									<>
										<div class="pricing-entry d-flex ftco-animate">
											<div class="img" style={{ "background-image": `url(${e.img})` }}></div>
											<div class="desc pl-3">
												<div class="d-flex text align-items-center">
													<h3><span>{e.title}</span></h3>
													<span class="price">Rs. {e.price}/-</span>
												</div>
												<div class="d-block">
													<p>{e.subtitle}</p>
												</div>
											</div>
										</div>
									</>
								)
							})
						}
					</div>
				</div>
			</div>

		</>
	)
}

export default Price