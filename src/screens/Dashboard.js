import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="skin-default fixed-layout">
                <div className="page-wrapper">
                    {/* <!-- ============================================================== -->
                    <!-- Container fluid  -->
                    <!-- ============================================================== --> */}
                    <div className="container-fluid">
                        {/* <!-- ============================================================== -->
                        <!-- Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== --> */}
                        <div className="row page-titles">
                            <div className="col-md-12 align-self-center">
                                <ol className="breadcrumb justify-content">
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                        {/* <!-- ============================================================== -->
                        <!-- End Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Start Page Content -->
                        <!-- ============================================================== --> */}
                        <div class="row">                    
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="round align-self-center round-success"><i class="icon-speedometer"></i></div>
                                            <div class="m-l-10 align-self-center">
                                                <h3 class="m-b-0" style={{float: "right"}}>100</h3>
                                                <h5 class="text-muted m-b-0" style={{float: "right"}}>On Going Orders</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="round align-self-center round-success"><i class="icon-speedometer"></i></div>
                                            <div class="m-l-10 align-self-center">
                                                <h3 class="m-b-0" style={{float: "right"}}>200</h3>
                                                <h5 class="text-muted m-b-0" style={{float: "right"}}>Completed Orders</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="round align-self-center round-success"><i class="icon-speedometer"></i></div>
                                            <div class="m-l-10 align-self-center">
                                                <h3 class="m-b-0" style={{float: "right"}}>2000</h3>
                                                <h5 class="text-muted m-b-0" style={{float: "right"}}>Online Orders</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div class="col-lg-3 col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-row">
                                            <div class="round align-self-center round-success"><i class="icon-speedometer"></i></div>
                                            <div class="m-l-10 align-self-center">
                                                <h3 class="m-b-0" style={{float: "right"}}>6540</h3>
                                                <h5 class="text-muted m-b-0" style={{float: "right"}}>Takeway Orders</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <h4 class="card-title">Product Details</h4>
                        <div className="row">                    
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 style={{float: "right"}}>86%</h3>
                                                <h4 className="card-subtitle">On Going Orders</h4>
                                            </div>
                                            <div className="col-12">
                                                <div className="progress">
                                                    {/* <div className="progress-bar bg-success" role="progressbar" style="width: 85%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 style={{float: "right"}}>86%</h3>
                                                <h4 className="card-subtitle">On Going Orders</h4>
                                            </div>
                                            <div className="col-12">
                                                <div className="progress">
                                                    {/* <div className="progress-bar bg-info" role="progressbar" style="width: 40%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 style={{float: "right"}}>86%</h3>
                                                <h4 className="card-subtitle">On Going Orders</h4>
                                            </div>
                                            <div className="col-12">
                                                <div className="progress">
                                                    {/* <div className="progress-bar bg-danger" role="progressbar" style="width: 56%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 style={{float: "right"}}>86%</h3>
                                                <h4 className="card-subtitle">On Going Orders</h4>
                                            </div>
                                            <div className="col-12">
                                                <div className="progress">
                                                    {/* <div className="progress-bar bg-inverse" role="progressbar" style="width: 26%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>                        
                        {/* <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">On-Going Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Order ID</th>
                                                        <th>Product Name</th>
                                                        <th>Customer Name</th>
                                                        <th>Customer Phone Number</th>
                                                        <th>Delivery Address</th>
                                                        <th>Delivery partner Name</th>
                                                        <th>Delivery partner Phone Number</th>
                                                        <th>Order Status</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>12345</td>
                                                        <td>Siva</td>
                                                        <td>12345</td>
                                                        <td>Peelamedu</td>
                                                        <td>12345</td>
                                                        <td>Siva</td>
                                                        <td>123456789</td>
                                                        <td>Waiting for Delivery Partner</td>                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- ============================================================== -->
                        <!-- End PAge Content -->
                        <!-- ============================================================== --> */}
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- End Container fluid  -->
                    <!-- ============================================================== --> */}
                </div>
            </div>
        </div>
    )
}


export default Dashboard
