import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
// import { PropTypes } from 'react'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'
import { HashRouter, Route  } from 'react-router-dom'
import { Whoops404 } from './components/Whoops404'


window.React = React



render(
	<HashRouter >
		<div>
		<Route path="/" component={App}/>
		<Route path="*" component={Whoops404}/>
		</div>
	</HashRouter>,
	
	document.getElementById('react-container')
)

//properties are an object and every property is a key. 
//Dynamic data supplied by this.props

// SkiDayList data will render inside SkiDayList component. 
//SkiDayRow is the child component to SkiDayList. 