import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Sidenav from '../Component/Common/Sidenav';
import { useFormik } from 'formik';
import { ContactSchema, productSchema } from '../Validation/Schema';
import swal from 'sweetalert';
import axios from 'axios';
import AxiosHomeInstance from '../Axios/AxiosHomeInstance';
import { toast } from 'react-toastify';

const initial = {
    category: "",
    img: "",
    title: "",
    subtitle: "",
    content: "",
    price: "",
    discount: ""
}
const AdminProduct = () => {
    const userId = localStorage.getItem('id')
    const [loader, setloader] = useState(false)
    const API = async (data, value) => {
        console.log(value);
        const res = await axios.post("https://api.cloudinary.com/v1_1/dl3uuxdrz/image/upload", data)
        const response = await AxiosHomeInstance.post('menu', {
            category: value.category,
            img: res?.data?.url,
            title: value.title,
            subtitle: value.subtitle,
            content: value.content,
            price: value.price,
            discount: value.discount
        })
        if (response?.status === 201) {
            setloader(false)
            toast.success(`${value.title} , This Product Added Successfully`)
        } else {
            alert("error in add product")
        }
        console.log(response);
    }
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, handleReset, setFieldValue } = useFormik({
        initialValues: initial,
        validationSchema: productSchema,
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
                        <h1 className="fw-bold text-white mt-5 text-center">ADD PRODUCT TO MENU</h1>
                        <div className="col-md-6 mx-auto mt-5 ftco-animate">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.title && touched.title ? (<label className='text-danger'>{errors.title}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Product title" name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.category && touched.category ? (<label className='text-danger'>{errors.category}</label>) : ''}
                                            <select class="form-control" name='category' value={values.category} onChange={handleChange} onBlur={handleBlur}>
                                                <option className='text-dark'>Select Catagory</option>
                                                <option className='text-dark' name='category' value="Pizza">Pizza</option>
                                                <option className='text-dark' name='category' value="Drinks">Drinks</option>
                                                <option className='text-dark' name='category' value="Burgers">Burgers</option>
                                                <option className='text-dark' name='category' value="Pasta">Pasta</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.price && touched.price ? (<label className='text-danger'>{errors.price}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Product Price" name='price' value={values.price} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            {errors.discount && touched.discount ? (<label className='text-danger'>{errors.discount}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Product Discount" name='discount' value={values.discount} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            {errors.subtitle && touched.subtitle ? (<label className='text-danger'>{errors.subtitle}</label>) : ''}
                                            <input type="text" className="form-control" placeholder="Product subtitle" name='subtitle' value={values.subtitle} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            {errors.content && touched.content ? (<label className='text-danger'>{errors.content}</label>) : ''}
                                            <textarea className="form-control" name='content' placeholder='Product Content' rows="6" value={values.content} onChange={handleChange} onBlur={handleBlur}></textarea>
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
                                            </> : 'ADD PRODUCT'}</button>
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

export default AdminProduct
