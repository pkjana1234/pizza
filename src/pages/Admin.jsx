import React, { useEffect } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import Sidenav from '../Component/Common/Sidenav';
const Admin = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-2 p-0">
                <Sidenav/>
                </div>
                {/* <div className="col-md-8 tab-content clearfix">
                    <h1 class="tab-pane" id="1a">
                       Lorem ipsum dolor sit amet.
                    </h1>
                    <h1 id='1b' class="tab-pane">
                        kdajhwhdhwdwydhiljdoiwuyud98wydwikdjwioud8iwuyd
                    </h1>
                </div> */}
                <div className="col-md-10">
                    <h1 className="fw-bold text-white mt-5 text-center">WELCOME TO ADMIN PORTAL</h1>
                </div>
            </div>

        </>
    )
}

export default Admin
