import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
const Sidenav = () => {
    useEffect(() => {
        $(".nav-pills li").on("click", function () {
            $(".nav-pills li").removeClass("activeC");
            $(this).addClass("activeC");
        });
    }, [])
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 px-3 py-0 text-white bg-dark" style={{ height: "100vh" }}>
                <hr />
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">LOG OUT</a>
                        </div>
                        <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <Link to="/admindashboard" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong className='mx-2'>ADMIN</strong>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><circle cx="12" cy="6" r="4"/><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" opacity=".5"/></g></svg>
                            </Link>
                        </a>
                    </li>
                </ul>
                <ul className="nav nav-pills flex-column mb-auto mt-3">
                    <li className="activeC">
                        <Link to="/admindashboard" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}></svg>
                            Dashboard
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/admindashboardorders" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}></svg>
                            ORDERS
                        </Link>
                    </li>
                    <li>
                        <Link to="/admindashboardcontact" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}></svg>
                            CONTACT INFO
                        </Link>
                    </li>
                    <li>
                        <Link to="/admindashboardproduct" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}></svg>
                            ADD PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/admindashboardblog" className="nav-link text-white">
                            <svg className="bi me-2" width={16} height={16}></svg>
                            ADD BLOGS
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default Sidenav
