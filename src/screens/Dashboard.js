import React from 'react'

const Dashboard = () => {
    return (
        <div>

{/* <!-- ============================================================== -->
<!-- Page wrapper  -->
<!-- ============================================================== --> */}
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
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Hub Detail</a>
                    </li>
                    <li className="breadcrumb-item active">Add Hub-Detail</li>
                </ol>
            </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== --> */}

        {/* <!-- Row --> */}
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <form action="#">
                        <div className="card-body">
                            <h3 className="card-title">Add Hub Info</h3>
                        </div>
                        <hr />
                        <div className="form-body">
                            <div className="card-body">
                                <div className="row pt-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Hub ID</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter Your Hub ID" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Hub Name</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Hub Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Hub Incharge Name</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Hub Incharge Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Location</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Hub Location" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Pincode</label>
                                            <input type="text" id="firstName" className="form-control form-select" placeholder="Enter your Hub pincode" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Delivery Partner</label>
                                            <select className="form-control form-select" data-placeholder="Choose a Delivery Partner" tabindex="1">
                                                <option value="#">Choose a Delivery Partner</option>
                                                <option value="#">Delivery Partner 1</option>
                                                <option value="#">Delivery Partner 2</option>
                                                <option value="#">Delivery Partner 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-actions">
                                    <div className="card-body">
                                        <button type="button" className="btn btn-dark">Back</button>
                                        <button type="submit" className="btn btn-success text-white">submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- Row --> */}
                
    </div>
    {/* <!-- ============================================================== -->
    <!-- End Container fluid  -->
    <!-- ============================================================== --> */}
</div>
            
        </div>
    )
}

export default Dashboard
