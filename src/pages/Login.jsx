import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginSchema } from '../Validation/Schema'
import { useDispatch, useSelector } from 'react-redux'
import { AllauthApi, AuthState } from '../Redux/Slices/AuthSlice'
import { toast } from 'react-toastify'
import Navbar from '../Component/Common/Navbar'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { AuthData } = useSelector((state) => {
		console.log(state?.Auth);
		return state?.Auth
	})
	const initial = {
		email: "",
		password: ""
	}

	const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
		initialValues: initial,
		validationSchema: LoginSchema,
		onSubmit: (value) => {
			const matchEmail = AuthData?.filter((e) => {
				return (
					e.email === value.email
				)
			})
			if (matchEmail.length === 0) {
				toast.error("Email is not Registered")
			} else {
				// console.log(matchEmail);
				if (matchEmail[0].password === value.password) {
					localStorage.setItem('name', matchEmail[0].name)
					localStorage.setItem('id', matchEmail[0].id)
					localStorage.setItem('phone', matchEmail[0].phone)
					localStorage.setItem('email', matchEmail[0].email)
					toast.success("login successful")
					let token = localStorage.getItem("id");
					let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

					if (token !== null && token !== undefined && token !== "") {
						// window.location.pathname = getPathname;
						isInLoginPage && navigate("/");
					}
					// navigate('/')
				} else {
					toast.error("Password is not matched")
				}
			}
		}
	})
	useEffect(() => {
		dispatch(AllauthApi())
	}, [])
	const handelClick = () => {
		dispatch(AuthState())
	}
	return (
		<>
			<Navbar />
			<section className="ftco-appointment d-flex align-items-center" style={{ "height": "90vh" }}>
				<div className="overlay"></div>
				<div className="container py-5">
					<div className="row no-gutters d-md-flex align-items-center">
						<div className="col-md-6 d-flex align-self-center">
							<div className="regImg">
								<img src='./images/bg_1.png' className='img-fluid' alt="" />
							</div>
						</div>
						<div className="col-md-6 appointment ftco-animate">
							<h3 className="mb-3">Sign In</h3>
							<form className="appointment-form" onSubmit={handleSubmit}>
								<div className="d-md-flex">
									<div className="form-group">
										{errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : ''}
										<input type="text" className="form-control" placeholder="Email-ID" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="d-me-flex">
									<div className="form-group">
										{errors.password && touched.password ? (<label className='text-danger'>{errors.password}</label>) : ''}
										<input type="text" className="form-control" placeholder="Password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
									</div>
								</div>
								<div className="form-group">
									<input type="submit" value="Sign in" onClick={handelClick} className="btn btn-primary py-3 px-4" />
								</div>
								<p>Don't have an account? <Link to="/register" onClick={handelClick}>Sign Up</Link></p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Login