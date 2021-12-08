import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './screens/Dashboard'
import DeliveryPartner from './screens/DeliveryPartner'
import OngoingOrder from './screens/OngoingOrder'
import ViewOngoingOrder from './screens/ViewOngoingOrder'
import RejectOrder from './screens/RejectOrder'
import ViewRejectOrder from './screens/ViewRejectOrder'
import CompletedOrder from './screens/CompletedOrder'
import ViewCompletedOrder from './screens/ViewCompletedOrder'
import Profile from './screens/Profile'
import ProductList from './screens/ProductList'
import ComboList from './screens/ComboList'
import DailyReport from "./screens/DailyReport";
import MonthlyReport from "./screens/MonthlyReport";
import AddOrder from "./screens/AddOrder";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/deliverypartner" component={DeliveryPartner} />
                <Route path="/ongoing" component={OngoingOrder} />
                <Route path="/viewongoing" component={ViewOngoingOrder} />
                <Route path="/reject" component={RejectOrder} />
                <Route path="/viewreject" component={ViewRejectOrder} />
                <Route path="/completed" component={CompletedOrder} /> 
                <Route path="/viewcompleted" component={ViewCompletedOrder} />            
                <Route path="/profile" component={Profile} />
                <Route path="/product" component={ProductList} />
                <Route path="/combo" component={ComboList} />
                <Route path="/dailyreport" component={DailyReport} />
                <Route path="/monthlyreport" component={MonthlyReport} /> 
                <Route path="/addorder" component={AddOrder} />               
                <Route path="/" exact component={Dashboard} />
            </Switch>
            <footer class="footer">
          All rights Reserved.Copyright © 2021 Radhe Food Industries | Design & Developed by <a href="https://sr-mediatech.com/"> SR-MediaTech</a>
          </footer>
        </Router>
    )
}

export default App
