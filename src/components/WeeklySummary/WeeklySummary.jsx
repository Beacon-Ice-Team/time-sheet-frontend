import React from 'react';
import Table from 'react-bootstrap/Table'

class WeeklySummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weeklySummaryRecordList : []
        };
    }

    componentDidMount() {
        const weeklySummaryRequest = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }

        fetch('/weekly-summary/get', weeklySummaryRequest)
            .then(response => response.json())
            .then(data => this.setState({
                weeklySummaryRecordList : data.weeklySummaryRecordList
            }));
    }

    renderTableData(){
        console.log(this.state.weeklySummaryRecordList)
        return this.state.weeklySummaryRecordList.map((weeklySummaryRecord, index) => {
            const {weekEnding, hours, submissionStatus, approvalStatus, comments} = weeklySummaryRecord
            return (
                <tr key={weekEnding}>                     
                    <td>{weekEnding}</td>
                    <td>{hours}</td>
                    <td>{submissionStatus}</td>
                    <td>{approvalStatus}</td>
                    <td><a href="/#">Edit</a></td>
                    <td>{comments}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Summary Page</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>WeekEnding</th>
                            <th>Total hours</th>
                            <th>Submission Status</th>
                            <th>Approval Status</th>
                            <th>Option</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default WeeklySummary;