import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegistationSchema } from '../Validation/Schema'
import { useDispatch, useSelector } from 'react-redux'
import { AllauthApi, RegisterApi } from '../Redux/Slices/AuthSlice'
import { toast } from 'react-toastify'
import Navbar from '../Component/Common/Navbar'

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { AuthData, regData, authRedirect } = useSelector((state) => {
		console.log(state?.Auth);
		return state?.Auth
	})
	const initial = {
		id: new Date().getTime(),
		name: "",
		email: "",
		phone: "",
		password: ""
	}

	const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
		initialValues: initial,
		validationSchema: RegistationSchema,
		onSubmit: (value) => {
			const matchMail = AuthData && AuthData?.filter((e) => {
				return (
					e.email === value.email
				)
			})
			if (matchMail.length === 0) {
				dispatch(RegisterApi(value))
				if (regData?.statusText === "Created") {
					toast.success(`Account has been ${regData?.statusText} successfully`)
					navigate('/login')
				}
			} else {
				toast.error("Email already registered")
			}
		}
	})
	useEffect(() => {
		dispatch(AllauthApi())
	}, [])
	return (
		<>
			<Navbar />
			<section className="ftco-appointment d-flex align-items-center" style={{ "height": "90vh" }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row no-gutters d-md-flex align-items-center">
						<div className="col-md-6 d-flex align-self-center">
							<div className="regImg">
								<img src='./images/bg_1.png' className='img-fluid' alt="" />
							</div>
						</div>
						<div className="col-md-6 appointment ftco-animate">
							<h3 className="mb-3">Sign Up</h3>
							<form className="appointment-form" onSubmit={handleSubmit}>
								<div className="d-md-flex">
									<div className="form-group">
										{errors.name && touched.name ? (<label className='text-danger'>{errors.name}</label>) : ''}
										<input type="text" className="form-control" placeholder="Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="d-md-flex">
									<div className="form-group">
										{errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : ''}
										<input type="text" className="form-control" placeholder="Email-ID" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="d-md-flex">
									<div className="form-group">
										{errors.phone && touched.phone ? (<label className='text-danger'>{errors.phone}</label>) : ''}
										<input type="text" className="form-control" placeholder="Mobile Number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="d-me-flex">
									<div className="form-group">
										{errors.password && touched.password ? (<label className='text-danger'>{errors.password}</label>) : ''}
										<input type="text" className="form-control" placeholder="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="form-group">
									<input type="submit" value="Sign Up" className="btn btn-primary py-3 px-4" />
								</div>
								<p>Already have an account? <Link to="/login">Sign In</Link></p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Register