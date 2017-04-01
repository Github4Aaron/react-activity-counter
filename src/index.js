import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
import { PropTypes } from 'react'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'


window.React = React



render(
	<App />,
	
	document.getElementById('react-container')
)

//properties are an object and every property is a key. 
//Dynamic data supplied by this.props

// SkiDayList data will render inside SkiDayList component. 
//SkiDayRow is the child component to SkiDayList. 