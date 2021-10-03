import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './screens/Dashboard'
import CustomerDetails from './screens/CustomerDetails'
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
                <Route path="/customers" component={CustomerDetails} />
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default App
