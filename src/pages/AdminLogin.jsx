import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminLoginSchema } from '../Validation/Schema'
import { useDispatch, useSelector } from 'react-redux'
import { AuthState } from '../Redux/Slices/AuthSlice'
import { toast } from 'react-toastify'
import { adminApi } from '../Redux/Slices/AdminSlice'

const AdminLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { adminData } = useSelector((state) => {
        // console.log(state?.Admin?.adminDataqw34);
        return state?.Admin
    })
    const initial = {
        email: "",
        password: ""
    }
    console.log(adminData);
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initial,
        validationSchema: AdminLoginSchema,
        onSubmit: (value) => {
            const matchEmail = adminData?.filter((e) => {
                return (
                    e.email === value.email && e.password === value.password
                )
            })
            if (matchEmail.length === 0) {
                toast.error("Invalid Credential")
            } else {
                localStorage.setItem('admin_name', matchEmail[0].name)
                localStorage.setItem('admin_token', matchEmail[0].id)
                toast.success("Admin login successful")
                navigate('/admindashboard')
            }
        }
    })
    useEffect(() => {
        dispatch(adminApi())
    }, [])
    const handelClick = () => {
        dispatch(AuthState())
    }
    return (
        <>
            <section className="ftco-appointment d-flex align-items-center" style={{ "height": "100vh" }}>
                <div className="overlay"></div>
                <div className="container py-5">
                    <div className="row no-gutters d-md-flex align-items-center">
                        <div className="col-md-6 d-flex align-self-center">
                            <div className="regImg">
                                <img src='../images/bg_1.png' className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 appointment ftco-animate">
                            <h3 className="mb-3">Admin Log In</h3>
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
                                    <input type="submit" value="Log In" onClick={handelClick} className="btn btn-primary py-3 px-4" />
                                </div>
                                {/* <p>Don't have an account? <Link to="/register" onClick={handelClick}>Sign Up</Link></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminLogin