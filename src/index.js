import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount1 } from './components/SkiDayCount-createClass.js'


window.React = React


render(					//if total isRequired and then removed, it will throw an error
	<SkiDayCount1 />, //if total is "string", it will produce an invalid prop type
	document.getElementById('react-container')
)

// render(
// 	<SkiDayList days={
// 		[
// 			{ // the objects in this array will populate the rows in the table
// 				resort: "Squaw Valley",
// 				date: new Date ("1/2/2016"),
// 				powder: true,
// 				backCountry: false
// 			}, 
// 			{ 
// 				resort: "Kirkwood",
// 				date: new Date ("3/28/2016"),
// 				powder: false,
// 				backCountry: false
// 			},
// 			{ 
// 				resort: "Mt Tallac",
// 				date: new Date ("4/2/2016"),
// 				powder: true,
// 				backCountry: false
// 			},
			
// 		]

// 	}/>,
// 	document.getElementById('react-container')
// )

//properties are an object and every property is a key. 
//Dynamic data supplied by this.props

// SkiDayList data will render inside SkiDayList component. 
//SkiDayRow is the child component to SkiDayList. 