
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayList } from './SkiDayList'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => {
	return((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
		return percentToDecimal(total/goal)
	}

export const SkiDayCount = ({total=70, 
							powder=20, 
							backcountry=10, 
							goal=100}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<calendar/>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake/>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain/>
				<span>days</span>
			</div>
			<div>
				<span>{calcGoalProgress( 
						total,
						goal)}</span>
			</div>
		</div>
	)
	SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
}


// 3 ways to make component: (1) createClass, (2) ES6 / class extends, (3) stateless functions component.
//Stateless functions do NOT have access to "this", so properties are passed directly into the function. 
//Local methods must be moved and put into their own functions. 



