import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Sidenav from '../Component/Common/Sidenav';
import AxiosInstance from '../Axios/AxiosInstance';


const AdminContacts = () => {
    const [data, setdata] = useState([])
    const conactApifetch = async () => {
        const res = await AxiosInstance.get('contact')
        setdata(res?.data)
    }
    useEffect(() => {
        conactApifetch()
        $(".nav-pills li a").on("click", function () {
            $(".nav-pills li a").removeClass("activeC");
            $(this).addClass("activeC");
        });
    }, [])
    return (
        <>
            <div>
                <div className="row gx-md-0">
                    <div className="col-md-2 p-0">
                        <Sidenav />
                    </div>
                    <div className="col-md-10 p-0">
                        <h1 className="fw-bold text-white mt-5 text-center">USERS CONTACT REQUESTS</h1>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL ADDRESS</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">SUBJECT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data?.map((e) => {
                                        return (
                                            <>
                                                <tr className='text-white'>
                                                    <th scope="row">{e.id}</th>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.phone}</td>
                                                    <td></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContacts
