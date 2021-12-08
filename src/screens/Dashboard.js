import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Order Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body form-body">                                                                            
                            <form>
                                <div class="mb-3">
                                    <div className="form-group">
                                        <label for="recipient-name" className="form-label">Order ID:</label>
                                        <input type="text" className="form-control form-select" id="recipient-name" placeholder="Order ID" disabled/>
                                    </div>
                                </div>  
                                <div class="mb-3">
                                    <label for="recipient-name" className="form-label">Product Name:</label>
                                    <input type="text" className="form-control form-select" id="recipient-name" placeholder="Product Name" disabled />
                                </div>          
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@getbootstrap">Reject</button>
                            <button type="button" className="btn btn-success" >Accept</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Reject Order Reason</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body form-body">
                            <div class="btn" role="group" aria-label="Basic checkbox toggle button group" style={{padding:"10px"}}>
                                <input type="checkbox" class="btn-check"  id="btncheck1" autocomplete="off"/>
                                <label class="btn waves-effect waves-light btn-rounded btn-outline-primary"  style={{margin:"10px"}} for="btncheck1">Checkbox 1</label>

                                <input type="checkbox" class="btn-check"  id="btncheck2" autocomplete="off"/>
                                <label class="btn waves-effect waves-light btn-rounded btn-outline-primary" style={{margin:"10px"}} for="btncheck2">Checkbox 2</label>

                                <input type="checkbox" class="btn-check"  id="btncheck3" autocomplete="off"/>
                                <label class="btn waves-effect waves-light btn-rounded btn-outline-primary" for="btncheck3">Checkbox 3</label>

                                <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off"/>
                                <label class="btn waves-effect waves-light btn-rounded btn-outline-primary" style={{margin:"10px"}}  for="btncheck4">Checkbox 4</label>

                                <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off"/>
                                <label class="btn waves-effect waves-light btn-rounded btn-outline-primary" style={{margin:"10px"}} for="btncheck5">Checkbox 5</label>
                            </div>
                            <div className="mb-3">
                                <div className="form-group">
                                    <label for="message-text" className="form-label">Message:</label>
                                    <textarea class="form-control form-select" id="message-text"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                            <div className="col-md-5 align-self-center">
                                <ol className="breadcrumb justify-content">
                                    <li className="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                            <div className="col-md-7 align-self-center text-end">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success"  href="/addorder">
                                         Add New Order
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                        {/* <!-- ============================================================== -->
                        <!-- End Bread crumb and right sidebar toggle -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Start Page Content -->
                        <!-- ============================================================== --> */}
                        <div class="row"> 
                            <div className="col-lg-12 align-self-center text-end">
                                <div className="d-flex justify-content-end align-items-center">
                                    <a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">
                                         Ongoing Order
                                    </a>
                                </div>
                            </div>                   
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
