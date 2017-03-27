import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React




render(
	<SkiDayCount total={50} // numbers are wrapped in JSX expressions
				 powder={12}
				 backcountry={10}
				 goal={100}/>,
	document.getElementById('react-container')
)

//properties are an object and every property is a key. 
//Dynamic data supplied by this.props