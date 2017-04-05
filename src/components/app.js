import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
    //State represents all the possible conditions of your application (editing, loggedin, logged out)
    //getInitialState: how to initialize state as default.
    //In react you want to identify minimal representation of state

    getInitialState() { //instead of holding days in props, we are holding them in State
        return {
            allSkiDays: [
			{ // the objects in this array will populate the rows in the table
				resort: "Squaw Valley",
				date: new Date ("1/2/2016"),
				powder: true,
				backCountry: false
			}, 
			{ 
				resort: "Kirkwood",
				date: new Date ("3/28/2016"),
				powder: false,
				backCountry: false
			},
			{ 
				resort: "Mt Tallac",
				date: new Date ("4/2/2016"),
				powder: true,
				backCountry: false
			},
			
		]
        }


    },
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] :day).length	
	},

    render() { 
        return ( //this will render first position in the array
            <div className="app"> 
                <SkiDayList days={this.state.allSkiDays}/> 
				<SkiDayCount total={this.countDays()}
							 powder={this.countDays(
								 	"powder"
							 )}
							 backcountry={this.countDays(
								  	"backcountry"
							 )}
							 />
            </div>
        )
    }
})
//app is rendering two componenets, SkiDayList and SkiDayCount. 