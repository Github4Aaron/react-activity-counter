import React from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
	percentToDecimal(decimal) {  //these methods are local to this component
		return((decimal * 100) + '%')
	},
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	},
	
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
					<span>{this.calcGoalProgress( //props are passed in as arguments to function
							this.props.total,
							this.props.goal)}</span>
				</div>
			</div>
		)
	}
})

//Instead of hard-coded data, using dynamic data supplied from props.

