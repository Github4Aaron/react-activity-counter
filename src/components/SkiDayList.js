import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'//Importing of child component
import { PropTypes } from 'react'

export const SkiDayList =({days}) => ( // JSX table below
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => //days and i are arguments passed in
                <SkiDayRow key={i} // for every day, a corresponding row will display.
                            resort={day.resort}
                            date={day.date}
                            powder={day.powder}
                            backcountry={day.backcountry}/>
            )}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: function(props) {
        if(!Array.isArray(props.days)) { // is props.days an array?
            return new Error( //if not, returns this error
                "SkiDayList should be an array"
            )
        } else if(!props.days.length) { // Are there any items in this array
            return new Error(
                "SkiDayList must have at least one record"
            )
        } else {  // if make it through both checks above, return null.
            return null
        }
    }
}

// Optional rendering of map function using the spread operator.
// <SkiDayRow key={i} 
//              {...day}/>
                            