import React, { useEffect, useState } from 'react'
import Sidenav from '../Component/Common/Sidenav';
import $ from 'jquery'
import { useFormik } from 'formik';
import { ContactSchema, BlogSchema, productSchema, blogSchema } from '../Validation/Schema';
import swal from 'sweetalert';
import axios from 'axios';
import AxiosHomeInstance from '../Axios/AxiosHomeInstance';
import { toast } from 'react-toastify';

const AdminBlog = () => {
    const initial = {
        date: "",
        img: "",
        comment: "",
        title: "",
        content: "",
        subcontent: ""
    }
    const userId = localStorage.getItem('id')
    const [loader, setloader] = useState(false)
    const API = async (data, value) => {
        console.log(value);
        const res = await axios.post("https://api.cloudinary.com/v1_1/dl3uuxdrz/image/upload", data)
        const response = await AxiosHomeInstance.post('blog', {
            date: value.date,
            img: res?.data?.url,
            comment: value.comment,
            title: value.title,
            content: value.content,
            subcontent: value.subcontent,
        })
        if (response?.status === 201) {
            setloader(false)
            toast.success(`${value.title} , This Blog Added Successfully`)
        } else {
            alert("error in add Blog")
        }
        console.log(response);
    }
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, handleReset, setFieldValue } = useFormik({
        initialValues: initial,
        validationSchema: blogSchema,
        onSubmit: (value) => {
            setloader(true)
            console.log(value.img);
            const data = new FormData()
            data.append('file', value.img)
            data.append("upload_preset", "eovobzyz")
            data.append("cloud_name", "dl3uuxdrz")
            API(data, value)
            handleReset()
        }
    })
    useEffect(() => {
        $(".nav-pills li a").on("click", function () {
            $(".nav-pills li a").removeClass("activeC");
            $(this).addClass("activeC");
        });
    }, [])
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Sidenav />
                    </div>
                    <div className="col-md-10">
                        <h1 className="fw-bold text-white mt-5">WELCOME TO ADMINBLOG</h1>
                        <div className="col-md-6 mx-auto mt-5 ftco-animate">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.title && touched.title ? (<label className='text-danger'>{errors.title}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Blog title" name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.date && touched.date ? (<label className='text-danger'>{errors.date}</label>) : ''}
                                            <input type="date" className="form-control" placeholder="Blog date" name='date' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.comment && touched.comment ? (<label className='text-danger'>{errors.comment}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Blog comment" name='comment' value={values.comment} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.content && touched.content ? (<label className='text-danger'>{errors.content}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Blog content" name='content' value={values.content} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            {errors.subcontent && touched.subcontent ? (<label className='text-danger'>{errors.subcontent}</label>) : ''}
                                            <textarea className="form-control" name='subcontent' placeholder='Blog subcontent' rows="6" value={values.subcontent} onChange={handleChange} onBlur={handleBlur}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            {errors.img && touched.img ? (<label className='text-danger'>{errors.img}</label>) : ''}
                                            <input type="file" className='form-control' id='img' name='img' onChange={(e) => setFieldValue("img", e.target.files[0])} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" disabled={loader === true} className="btn btn-primary py-3 px-5">{loader === true ? <>
                                                <div class="lds-ellipsis"><div></div><div></div><div></div></div>
                                            </> : 'ADD Blog'}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBlog
