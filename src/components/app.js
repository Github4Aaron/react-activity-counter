import { createClass } from 'react'

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
    render() { 
        return ( //this will render first position in the array
            <div className="app"> 
                {this.state.allSkiDays[0]["resort"]} 
            </div>
        )
    }
})