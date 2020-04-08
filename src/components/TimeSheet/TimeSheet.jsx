import React from 'react';

class TimeSheet extends React.Component {
    render() {
        return(
            <div>
            Week Ending: <input class="form-group" />{/* needs to be dropdown */}
            <div>
                <button type="button" class="btn btn-primary">Set Default</button>
            </div>
            <form>
            <table class="table">
                <thead>
                    <td><b><u>Date</u></b></td>
                    <td><b><u>Day</u></b></td>
                    <td><b><u>Start Time</u></b></td>
                    <td><b><u>End Time</u></b></td>
                    <td><b><u>Total Hours</u></b></td>
                    <td><b><u>Floating Day</u></b></td>
                    <td><b><u>Vacation</u></b></td>
                    <td><b><u>Holiday</u></b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>put date here</td>
                        <td>Sunday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='sunFloatDay' name="sundayOff" /></td>
                        <td><input type="radio" id='sunVacation' name="sundayOff" /></td>
                        <td><input type="radio" id='sunHoliday' name="sundayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Monday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='monFloatDay' name="mondayOff" /></td>
                        <td><input type="radio" id='monVacation' name="mondayOff" /></td>
                        <td><input type="radio" id='monHoliday' name="mondayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Tuesday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='tueFloatDay' name="tuesdayOff" /></td>
                        <td><input type="radio" id='tueVacation' name="tuesdayOff" /></td>
                        <td><input type="radio" id='tueHoliday' name="tuesdayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Wednesday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='wedFloatDay' name="wednesdayOff" /></td>
                        <td><input type="radio" id='wedVacation' name="wednesdayOff" /></td>
                        <td><input type="radio" id='wedHoliday' name="wednesdayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Thursday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='thuFloatDay' name="thursdayOff" /></td>
                        <td><input type="radio" id='thuVacation' name="thursdayOff" /></td>
                        <td><input type="radio" id='thuHoliday' name="thursdayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Friday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='friFloatDay' name="fridayOff" /></td>
                        <td><input type="radio" id='friVacation' name="fridayOff" /></td>
                        <td><input type="radio" id='friHoliday' name="fridayOff" /></td>
                    </tr>
                    <tr>
                        <td>put date here</td>
                        <td>Saturday</td>
                        <td><input type="time" /></td>
                        <td><input type="time" /></td>
                        <td><input type="number" min="0" max="24" /></td>
                        <td><input type="radio" id='satFloatDay' name="saturdayOff" /></td>
                        <td><input type="radio" id='satVacation' name="saturdayOff" /></td>
                        <td><input type="radio" id='satHoliday' name="saturdayOff" /></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default TimeSheet;