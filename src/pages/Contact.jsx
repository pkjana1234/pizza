import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactSchema } from '../Validation/Schema'
import swal from 'sweetalert';
import AxiosInstance from '../Axios/AxiosInstance'
import { toast } from 'react-toastify';
import Navbar from '../Component/Common/Navbar'
import InnerBanner from '../Component/Core/InnerBanner';
import Footer from '../Component/Common/Footer';
const Contact = () => {
  const navigate = useNavigate()
  const initial = {
    name: "",
    email: "",
    phone: ""
  }
  const userId = localStorage.getItem('id')
  const ContactApi = async (value) => {
    const res = await AxiosInstance.post('contact', value)
    console.log(res?.data);
    if (res?.status === 201) {
      toast.success(`Thanks for contacting us ${res?.data?.name}. We will contact you soon`)
      handleReset()
    }
  }
  const { values, handleChange, handleSubmit, handleBlur, errors, touched, handleReset } = useFormik({
    initialValues: initial,
    validationSchema: ContactSchema,
    onSubmit: (value) => {
      if (userId === null) {
        swal({
          title: "Are you sure? You want to Login",
          text: "In order to send a request You have to login First!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              navigate('/login')
            }
          });
      } else {
        ContactApi(value)
      }
    }
  })
  // console.log(contactData);
  return (
    <>
      <Navbar />
      <InnerBanner />

      <section className="ftco-section contact-section">
        <div className="container mt-5">
          <div className="row block-9">
            <div className="col-md-4 contact-info ftco-animate">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="col-md-12 mb-3">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-12 mb-3">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                <div className="col-md-12 mb-3">
                  <p><span>Website:</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 ftco-animate">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {errors.name && touched.name ? (<label className='text-danger'>{errors.name}</label>) : ''}
                      <input type="text" className="form-control" placeholder="Your Name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {errors.email && touched.email ? (<label className='text-danger'>{errors.email}</label>) : ''}
                      <input type="text" className="form-control" placeholder="Your Email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {errors.phone && touched.phone ? (<label className='text-danger'>{errors.phone}</label>) : ''}
                      <input type="text" className="form-control" placeholder="Subject" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message (optional)"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact