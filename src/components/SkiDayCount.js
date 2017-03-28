import { Component } from 'react'
import '../stylesheets/ui.scss'

export class SkiDayCount extends Component {
	percentToDecimal(decimal) {  
		return((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}
	
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span>hiking day</span>
				</div>
				<div>
					<span>{this.calcGoalProgress( 
							this.props.total,
							this.props.goal)}</span>
				</div>
			</div>
		)
	}
}

// ES6, released in 2015, describes how JS should be implemented by browsers.
//Class syntax is one feature of ES6. 
//Differences with ES6 Class Syntax:
		//"Class" and "extends" replace "createClass"
		//Methods do not need commas after them.
		//Ability to import specific part  of React ("extends Component")
		//Data binding must be done manually

