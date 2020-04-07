import React from 'react';

class TimeSheet extends React.Component {
    render() {
        return(
            <div>
            Week Ending: <input class="form-group" />
            <table class="table">
                <thead>
                    <td>Date</td>
                    <td>Day</td>
                    <td>Time Start</td>
                    <td>Time End</td>
                </thead>
                <tbody>
                    <td>put date here</td>
                    <td>put days here</td>
                    <td><input type="time" /></td>
                    <td><input type="time" /></td>
                </tbody>
            </table>
            
            </div>
        )
    }
}

export default TimeSheet;