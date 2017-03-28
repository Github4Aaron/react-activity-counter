
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
	return((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
		return percentToDecimal(total/goal)
	}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
				<span>hiking day</span>
			</div>
			<div>
				<span>{calcGoalProgress( 
						total,
						goal)}</span>
			</div>
		</div>
	)
	
// 3 ways to make component: (1) createClass, (2) ES6 / class extends, (3) stateless functions component.
//Stateless functions do NOT have access to "this", so properties are passed directly into the function. 
//Local methods must be moved and put into their own functions. 



