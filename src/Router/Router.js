import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import DashBoard from '../Pages/Dashboard/DashBoard';
import Projects from '../Pages/Projects/Projects';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={DashBoard}/>
                    <Route exact path='/projects' component={Projects}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
