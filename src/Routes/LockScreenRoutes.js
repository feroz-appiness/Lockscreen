import React from 'react'
import Lockscreen from '../Components/Lockscreen'
import Dasboard from '../Components/Dashboard'
import {BrowserRouter as Routes,Switch,Route} from 'react-router-dom'


const LockScreenRoutes = (props) => {
    return (
        <div>
            <Routes>
            <Switch>
            <Route exact path='/' component={Lockscreen}/>
            <Route exact path='/Dashboard' component={Dasboard}/>
            </Switch>
            </Routes>
        </div>
    )
}

export default LockScreenRoutes
