import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="skin-default fixed-layout">
                {/* <!-- ============================================================== -->
                <!-- Preloader - style you can find in spinners.css -->
                <!-- ============================================================== --> */}
                {/* <div className="preloader">
                    <div className="loader">
                        <div className="loader__figure"></div>
                        <p className="loader__label">Addipoli admin</p>
                    </div>
                </div> */}
                {/* <!-- ============================================================== --> 
                <!-- Main wrapper - style you can find in pages.scss -->
                <!-- ============================================================== --> */}
                <div id="main-wrapper">
                    {/* <!-- ============================================================== -->
                    <!-- Topbar header - style you can find in pages.scss -->
                    <!-- ============================================================== --> */}
                    <header className="topbar">
                        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                            {/* <!-- ============================================================== -->
                            <!-- Logo -->
                            <!-- ============================================================== --> */}
                            <div className="navbar-header">
                                <a href="/" className="navbar-brand" >

                                    <b>
                                        {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //-->
                                        <!-- Dark Logo icon --> */}
                                        {/* <img src="assets/images/logo.png" alt="homepage" className="dark-logo" style={{width: "50px"}}/>
            
                                        <img src="assets/images/logo.png" alt="homepage" className="light-logo" style={{width: "50px"}} /> */}
                                    </b>
                                    {/* <!--End Logo icon -->
                                    <!-- Logo text --> */}
                                    <span>
                                        {/* <!-- dark Logo text --> */}
                                        <img src="assets/images/logo-main.png" alt="homepage" className="dark-logo" style={{width: "100px", marginLeft:"30px"}} />
                                        {/* <!-- Light Logo text --> */}
                                        <img src="assets/images/logo-main.png" className="light-logo" alt="homepage" style={{width: "100px",marginLeft:"30px" }} />
                                    </span>
                                </a>
                            </div>
                            {/* <!-- ============================================================== -->
                            <!-- End Logo -->
                            <!-- ============================================================== --> */}
                            <div className="navbar-collapse">
                                {/* <!-- ============================================================== -->
                                <!-- toggle and nav items -->
                                <!-- ============================================================== --> */}
                                <ul className="navbar-nav me-auto">
                                    {/* <!-- This is  --> */}
                                    <li className="nav-item">
                                        <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                                            href="javascript:void(0)">
                                            <i className="ti-menu"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                                            href="javascript:void(0)">
                                            <i className="icon-menu"></i>
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- ============================================================== -->
                                    <!-- Switch Button -->
                                    <!-- ============================================================== --> */}
                                    <div class="row">
                                        <div class="col-5 bt-switch">
                                            <div class="m-b-30">
                                                <input type="checkbox" checked data-size="large" />
                                            </div>
                                        </div>   
                                        {/* <div className="col-9 align-self-center text-end" >
                                            <div className="d-flex justify-content-end align-items-center">
                                                <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success" style={{width:"180px",marginLeft:"30px"}} href="/addorder">
                                                     Add New Order
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>


                                {/* <!-- ============================================================== -->
                                <!-- User profile -->
                                <!-- ============================================================== --> */}
                                <div className="user-profile">
                                <div className="user-pro-body">
                                  <div className="dropdown" style={{marginRight:"20px"}}>
                                    <div><img src="assets/images/users/2.png" alt="user-img" className="img-circle dropdown-toggle u-dropdown link hide-menu" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" />                   
                                        <div className="dropdown-menu animated flipInY"  style={{marginRight:"10px", marginTop:"50px" }} >
                                            <a href="/profile" className="dropdown-item"><i className="ti-user"></i> My Profile</a>                                            
                                            <a href="#"  className="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                              <path d="M7.5 1v7h1V1h-1z"/>
                                              <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                                            </svg> Logout</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    {/* <!-- ============================================================== -->
                    <!-- End Topbar header -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Left Sidebar - style you can find in sidebar.scss  -->
                    <!-- ============================================================== --> */}
                    <aside className="left-sidebar">
                        {/* <!-- Sidebar scroll--> */}
                        <div className="scroll-sidebar">    
                            {/* <!-- Sidebar navigation--> */}
                            <nav className="sidebar-nav">
                                <ul id="sidebarnav">
                                    <li>
                                        <a href="/" className="waves-effect waves-dark" >
                                        <i className="icon-speedometer"></i>
                                            <span className="hide-menu">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/product"  className="waves-effect waves-dark" >
                                            <i className="ti-palette"></i>
                                            <span className="hide-menu">Product List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/combo"  className="waves-effect waves-dark" >
                                            <i className="ti-palette"></i>
                                            <span className="hide-menu">Combo List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ongoing"  className="waves-effect waves-dark" >
                                            <i className="ti-pie-chart"></i>
                                            <span className="hide-menu">Ongoing Orders</span>
                                        </a>
                                    </li>                                    
                                    <li>
                                        <a className="waves-effect waves-dark" href="/completed"
                                            aria-expanded="false">
                                            <i className="ti-layout-media-right-alt"></i>
                                            <span className="hide-menu">Completed Orders</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/reject"  className="waves-effect waves-dark" >
                                        <i className="ti-gallery"></i>
                                            <span className="hide-menu">Rejectd Orders</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="waves-effect waves-dark" href="/deliverypartner"
                                            aria-expanded="false">
                                            <i className="ti-location-pin"></i>
                                            <span className="hide-menu">Delivery Partner</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        className="has-arrow waves-effect waves-dark"
                                        href="javascript:void(0)"
                                        aria-expanded="false"
                                        >
                                        <i className="ti-pie-chart"></i>
                                        <span className="hide-menu">Sales Report</span>
                                        </a>
                                        <ul aria-expanded="false" className="collapse">
                                        <li>
                                            <a href="/dailyreport">Daily Report</a>
                                        </li>
                                        <li>
                                            <a href="/monthlyreport">Monthly Report</a>
                                        </li>                      
                                        </ul>
                                    </li>                               
                                </ul>
                            </nav>
                            {/* <!-- End Sidebar navigation --> */}
                        </div>
                        {/* <!-- End Sidebar scroll--> */}
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
