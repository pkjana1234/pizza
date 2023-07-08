import * as Yup from 'yup'

export const RegistationSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Valid Email Address"),
    phone: Yup.number().required("Please Enter Your Mobile Number"),
    password: Yup.string().min(6).max(12).required("Please Enter Your Password")
})
export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email-ID"),
    password: Yup.string().min(6).max(12).required("Please Enter Password")
})
export const AdminLoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email-ID"),
    password: Yup.string().min(6).max(12).required("Please Enter Password")
})
export const ContactSchema = Yup.object({
    name: Yup.string().min(2).max(30).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Valid Email Address"),
    phone: Yup.string().min(2).max(20).required("Please Enter a Phone Number")
})
export const productSchema = Yup.object({
    title: Yup.string().min(5).max(100).required("Please Enter A Title"),
    category: Yup.string().min(5).max(100).required("Please Select a category"),
    subtitle: Yup.string().min(5).max(200).required("Please Enter A Sub Title"),
    content: Yup.string().min(5).max(1000).required("Please Enter contents"),
    price: Yup.number().required("Please Enter price"),
    discount: Yup.number().required("Please Enter discount"),
    img: Yup.mixed().required("Please Select an image file")
        .test("FILE_SIZE", "Please select a small file!", (value) => value && value.size < 2024 * 2024)
        .test("FILE_TYPE", "Please select an Image File Types (JPEG, JPG, WEBP, PNG)!", (value) => value && ['image/png','image/jpeg','image/jpg','image/webp'].includes(value.type))
})
export const blogSchema = Yup.object({
    title: Yup.string().min(5).max(100).required("Please Enter A Title"),
    date: Yup.date().required("Please Select Date"),
    comment: Yup.string().min(5).max(1000).required("Please Enter Comment"),
    content: Yup.string().min(5).max(1000).required("Please Enter contents"),
    subcontent: Yup.string().required("Please Enter Subcontent"),
    img: Yup.mixed().required("Please Select an image file")
        .test("FILE_SIZE", "Please select a small file!", (value) => value && value.size < 2024 * 2024)
        .test("FILE_TYPE", "Please select an Image File Types (JPEG, JPG, WEBP, PNG)!", (value) => value && ['image/png','image/jpeg','image/jpg','image/webp'].includes(value.type))
})