import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InitialPage from '../Pages/InitialPage/InitialPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'
import FeedPage from '../Pages/Feed/FeedPage'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import EditProfilePage from '../Pages/EditProfilePage/EditProfilePage'
import RestaurantPage from '../Pages/RestaurantPage/RestaurantPage'
import AddressPage from '../Pages/AddressPage/AddressPage'
import CartPage from '../Pages/CartPage/CartPage'
import HomePage from '../Pages/Home/HomePage'


const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={InitialPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/sign_up' component={SignUpPage} />
            <Route exact path='/feed' component={FeedPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/edit_profile' component={EditProfilePage} />
            <Route exact path='/restaurant/:id' component={RestaurantPage} />
            <Route exact path='/address_form' component={AddressPage} />
            <Route exact path='/cart' component={CartPage} />
        </Switch>
        </BrowserRouter>
    )
}
export default Router