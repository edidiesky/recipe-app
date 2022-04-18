import React from 'react'
import {Switch, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Resultpage from './pages/Resultpage'

import Detailspage from './pages/Detailspage'
export default function App() {
  return (
	<div>
		<Routes>
		    <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:name" element={<Cuisine />} />
        <Route path="/cuisine/:search" element={<Resultpage />} />

        <Route path="/recipes/:name" element={<Detailspage />} />
		</Routes>
	</div>
  )
}
