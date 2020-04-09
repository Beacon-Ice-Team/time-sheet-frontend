import React from 'react';

class TimeSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSheet: [],
            weeklySummary: [],
            weekEnd: ''
        }
        const requestTimeSheet = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            //headers: headers,
            // body: JSON.stringify({ "username": "user1" }),
        };

        fetch('/time-sheet/view', requestTimeSheet)
            .then(response => response.json())
            .then(data => this.setState({
               timeSheet: data.timeSheet
            }));

        const requestWeeks = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
                //headers: headers,
                // body: JSON.stringify({ "username": "user1" }),
        };
    
        fetch('/time-sheet/weeks', requestWeeks)
            .then(response => response.json())
            .then(data => this.setState({
               weeklySummary: data.weeklySummary
            }));
    }

    componentDidMount() {
        console.log("component did moount")
        // const requestTimeSheet = {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
        //     //headers: headers,
        //     // body: JSON.stringify({ "username": "user1" }),
        // };

        // fetch('/time-sheet/view', requestTimeSheet)
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //        timeSheet: data.timeSheet
        //     }));

        // const requestWeeks = {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //         //headers: headers,
        //         // body: JSON.stringify({ "username": "user1" }),
        //     };
    
        //     fetch('/time-sheet/weeks', requestWeeks)
        //         .then(response => response.json())
        //         .then(data => this.setState({
        //            weeklySummary: data.weeklySummary
        //         }));

        
    }

    // renderDropDown() {
    //     return this.state.weeklySummary.map((week) => {
    //         const { weekEnding } = week
    //         return (
    //         <option key={weekEnding} value={weekEnding}>{weekEnding}</option>
    //         )
    //     })
    // }

    renderTableData() {
        // console.log(this.state.timeSheet)
        return this.state.timeSheet.map((workDay, index) => {
            const { day, startTime, endTime, hours, floatDay, vacation, holiday} = workDay
            return (
                <tr key={day}>
                    <td>{day}</td>
                    <td><input type="time" defaultValue={startTime} onChange={this.onStartChange.bind(this)} /></td>
                    <td><input type="time" defaultValue={endTime} onChange={this.onEndChange.bind(this)}/></td>
                    <td><input type="number" min="0" max="24" defaultValue={hours} onChange={this.onHourChange.bind(this)}/></td>
                    <td><input type="radio"  defaultValue={floatDay} defaultChecked={floatDay === 1} name={day} onChange={this.onFloatChange.bind(this)} /></td>
                    <td><input type="radio"  defaultValue={vacation} defaultChecked={vacation === 1} name={day} onChange={this.onVacationChange.bind(this)}/></td>
                    <td><input type="radio"  defaultValue={holiday} defaultChecked={holiday === 1} name={day} onChange={this.onHolidayChange.bind(this)}/></td>
                </tr>
            )
        })
    }

    // onChange={(e) => this.setState({weekEnd: e.target.value})}
    render() {
        return(
            <div>
            Week Ending: 
            <select value={this.state.weekEnd} onChange={this.change.bind(this)}>
                {this.state.weeklySummary.map((week) => <option key={week.weekEnding} value={week.weekEnding}>{week.weekEnding}</option>)}
            </select>
            <div>
                <button type="button" class="btn btn-primary" onClick={() => this.submitDefault()}>Set Default</button>
            </div>
            <form>
            <table class="table">
                <thead>
                    {/* <td><b><u>Date</u></b></td> */}
                    <td><b><u>Day</u></b></td>
                    <td><b><u>Start Time</u></b></td>
                    <td><b><u>End Time</u></b></td>
                    <td><b><u>Total Hours</u></b></td>
                    <td><b><u>Floating Day</u></b></td>
                    <td><b><u>Vacation</u></b></td>
                    <td><b><u>Holiday</u></b></td>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
            <button type="button" class="btn btn-primary" onClick={() => this.submitWeek()}>Submit</button>
            </form>
            </div>
        )
    }

    onStartChange(event) {
        this.setState({startTime: event.target.value})
        console.log(this.state.startTime);
    }

    onEndChange(event) {
        this.setState({endTime: event.target.value})
    }

    onHourChange(event) {
        this.setState({hours: event.target.value})
    }

    onFloatChange(event) {
        this.setState({floatDay: event.target.value})
    }

    onVacationChange(event) {
        this.setState({vacation: event.target.value})
    }

    onHolidayChange(event) {
        this.setState({holiday: event.target.value})
    }

    change(event){
        this.setState({weekEnd: event.target.value});
        this.getNewWeek();
    }

    getNewWeek() {
        console.log("change");
        const requestNewWeek= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //headers: headers,
            body: JSON.stringify({ "weekEnding": this.state.weekEnd }),
        };

        // console.log(this.state.weekEnd )
        fetch('/time-sheet/view', requestNewWeek)
            .then(response => response.json())
            .then(data => this.setState({
               timeSheet: data.timeSheet
            }));
        console.log(" in change")
        console.log(this.state.timeSheet )
    }

    submitDefault() {
        alert('timesheet default changed');
        const submitTimeSheet = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //headers: headers,
            body: JSON.stringify({
                "timeSheet": this.state.timeSheet
            }),
        };
        fetch('/time-sheet/update', submitTimeSheet)
    }

    submitWeek(){
        alert('timesheet submitted');
        const submitTimeSheet = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //headers: headers,
            body: JSON.stringify({
                "weekEnding": this.state.weekEnd,
                "timeSheet": this.state.timeSheet
            }),
        };
        fetch('/time-sheet/submit', submitTimeSheet)
            
    }
}

export default TimeSheet;
