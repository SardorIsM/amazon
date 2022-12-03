import React from 'react'
import Home from "./home/Home"
import Login from './login/Login';
import { Route } from 'react-router-dom';
import Explore from './explore/Explore';
import Pdp from './pdp/Pdp';
import SignUp from './signUp/SignUp';
import Shopnow from './shopnow/Shopnow';

const index = () => {
    return (
        <>

            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/explorenow" exact>
                <Explore />
            </Route>
            <Route path="/shopnow" exact>
                <Shopnow />
            </Route>
            <Route path="/explorenow/:id">
                <Pdp />
            </Route>


        </>
    )
}

export default index