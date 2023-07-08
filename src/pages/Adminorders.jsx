import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import Sidenav from '../Component/Common/Sidenav';
import AxiosInstance from '../Axios/AxiosInstance';

const Adminorders = () => {
    const [data, setdata] = useState([])
    const adminorderFetch = async () => {
        const res = await AxiosInstance.get('cart')
        setdata(res?.data)
    }
    useEffect(() => {
        $(".nav-pills li a").on("click", function () {
            $(".nav-pills li a").removeClass("activeC");
            $(this).addClass("activeC");
        });
        adminorderFetch()
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidenav />
                </div>
                <div className="col-md-10">
                    <h1 className="fw-bold text-white mt-5 mb-5 text-center">WELCOME TO ADMINORDERS</h1>
                    {
                        data && data?.map((e) => {
                            return (
                                <>
                                    <div class="container" id="no-more-tables">
                                        <p>&nbsp;</p>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr class="active text-white">
                                                    <th class="col-xs-2"><strong>ID</strong></th>
                                                    <th class="col-xs-2"><strong>NAME</strong></th>
                                                    <th class="col-xs-6"><strong>EMAIL</strong></th>
                                                    <th class="col-xs-2"><strong>PHONE NUMBER</strong></th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-white'>
                                                <tr role="button" data-toggle="collapse" href={`#demo1${e.id}`} aria-expanded="false" aria-controls="demo1">
                                                    <td data-title="WO Ref">{e.id}</td>
                                                    <td data-title="Reported">{e.name}</td>
                                                    <td data-title="Type">{e.email}</td>
                                                    <td data-title="Completed">{e.phone}</td>
                                                </tr>
                                                <td colspan="6" class="hiddenRow text-dark">
                                                    <div class="collapse" id={`demo1${e.id}`}>
                                                        <table class="table table-nested">
                                                            {
                                                                e.data.map((ele) => {
                                                                    return (
                                                                        <>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="col-xs-4 col-sm-2 active">
                                                                                        <img src={ele.img} height={20} width="80"className='img-fluid' alt="" srcset="" />
                                                                                    </td>
                                                                                    <td className='mt-5'>{ele.category}</td>
                                                                                    <td className='mt-5'>{ele.title}</td>
                                                                                    <td className='mt-5'>Rs. {ele.price}/-</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </table>
                                                    </div>
                                                </td>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Adminorders
