import React from 'react'

const OngoingOrder = () => {
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
                            <div className="col-md-5 align-self-center">
                                <ol className="breadcrumb justify-content">
                                    <li className="breadcrumb-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Ongoing Order</li>
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
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Ongoing Order Details</h3>
                                        <div className="table-responsive m-t-40">
                                            <table id="myTable" className="table table-striped border">
                                                <thead>
                                                    <tr>
                                                        <th>S.NO</th>
                                                        <th>Order ID</th>                                                        
                                                        <th>Customer Name</th>
                                                        <th>Customer Phone Number</th>
                                                        <th>Delivery Address</th>
                                                        <th>Delivery Status</th>                                                        
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>12345</td>                                                        
                                                        <td>Siva</td>                                                        
                                                        <td>9500250040</td>
                                                        <td>Delivery Link</td> 
                                                        <td><a role="button" className="btn waves-effect waves-light btn-rounded btn-outline-primary">
                                                                Delivery Confirmation
                                                            </a> 
                                                        </td>                                                    
                                                        <td><a href="/viewongoing" role="button" className="btn btn-circle btn-info" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                            </svg>
                                                            </a>
                                                            <a role="button" className="btn btn-circle btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                                </svg>
                                                            </a>
                                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="exampleModalLabel">Delivery Person Details</h5>
                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body form-body">                                                                            
                                                                            <form>
                                                                                <div class="mb-3">
                                                                                    <div className="form-group">
                                                                                        <label for="recipient-name" className="form-label">Delivery Person Name:</label>
                                                                                        <input type="text" className="form-control form-select" id="recipient-name" placeholder="Enter Delivery Person Name" />
                                                                                    </div>
                                                                                </div>  
                                                                                <div class="mb-3">
                                                                                    <label for="recipient-name" className="form-label">Phone Number:</label>
                                                                                    <input type="text" className="form-control form-select" id="recipient-name" placeholder="Enter Delivery Person Phone Number" />
                                                                                </div>          
                                                                            </form>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                                                            <button type="button" className="btn btn-success">Send message</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <a role="button" className="btn btn-circle btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-whatever="@getbootstrap">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
                                                                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                            </svg>
                                                            </a>
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
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default OngoingOrder


