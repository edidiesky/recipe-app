import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Switch } from 'react-router-dom'
export default function Pages() {
  return (
    <>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/cuisine' component={Cuisine}/>
    </Switch>
    
    </>
  ) 
}
