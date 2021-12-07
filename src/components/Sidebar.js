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
                                    {/* <!-- ============================================================== -->
                                    <!-- Search -->
                                    <!-- ============================================================== --> */}
                                    {/* <li className="nav-item">
                                        <form className="app-search d-none d-md-block d-lg-block">
                                            <input type="text" className="form-control" placeholder="Search & enter" />
                                        </form>
                                    </li> */}
                                    <div class="row">
                                    <div class="col-lg-12 bt-switch">
                                        <div class="m-b-30">
                                        <input type="checkbox" checked data-size="large" />
                                        </div>
                                    </div></div>
                                </ul>
                                {/* <!-- ============================================================== -->
                                <!-- User profile and search -->
                                <!-- ============================================================== --> */}
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
                            {/* <!-- User Profile--> */}
                            <div className="user-profile">
                                <div className="user-pro-body">
                                    <div>
                                        <img src="assets/images/logo.png" alt="user-img" className="img-circle" />
                                    </div>
                                    <div className="dropdown">
                                        <a href="javascript:void(0)" className="dropdown-toggle u-dropdown link hide-menu"
                                            data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hub Admin
                                            <span className="caret"></span>
                                        </a>
                                        <div className="dropdown-menu animated flipInY">
                                            <a href="/profile" className="dropdown-item"><i className="ti-user"></i> My Profile</a>                                            
                                            <a href="#" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    {/* <li>
                                        <a className="waves-effect waves-dark" href="/enquiry"
                                            aria-expanded="false">
                                            <i className="ti-email"></i>
                                            <span className="hide-menu">Enquiry</span>
                                        </a>
                                    </li>                                     */}
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
