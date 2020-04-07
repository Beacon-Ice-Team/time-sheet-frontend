import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            address: '',
            ec1Name: 'EC1 name',
            ec1Phone: 'EC1 phone',
            ec2Name: 'EC2 name',
            ec2Phone: 'EC2 phone'
        }
    }

    componentDidMount() {
        
        console.log(1111111);
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'access-token': '',
        //     'Access-Control-Allow-Origin': '*',
        //   }
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');

        // headers.append('GET', 'POST', 'OPTIONS');
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            //headers: headers,
            body: { "username" :"user1" }
        };
        
        fetch('/users/getContact', request)
            .then(response => response.json())
            .then(data => this.setState({ phone: data.phone, email: data.email, address: data.address }));
    }

    render() {
        const { phone, email, address } = this.state;


        return (

            <div class="page-wrapper" >
                <br></br>
                <div class="container-fluid">
                    <div class="card" style={{ width: 500, textAlign: 'center' }}>
                        <div style={{ textAlign: 'left' }}>
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <h5 style={{ textAlign: 'center' }}>Contact</h5>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="text" className="form-control" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email address</label>
                                    <input type="email" className="form-control" value={email} onChange={this.onEmailChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="address" className="form-control" value={address} onChange={this.onAddressChange.bind(this)} />
                                </div>


                                <h5 style={{ textAlign: 'center' }}>Emergency Contact 1</h5>
                                <div className="form-group">
                                    <label htmlFor="EC1Name">Name</label>
                                    <input type="text" className="form-control" value={this.state.ec1Name} onChange={this.onEC1NameChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="EC1Phone">Phone</label>
                                    <input type="text" className="form-control" value={this.state.ec1Phone} onChange={this.onEC1PhoneChange.bind(this)} />
                                </div>


                                <h5 style={{ textAlign: 'center' }}>Emergency Contact 2</h5>
                                <div className="form-group">
                                    <label htmlFor="EC2Name">Name</label>
                                    <input type="text" className="form-control" value={this.state.ec2Name} onChange={this.onEC2NameChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="EC2Phone">Phone</label>
                                    <input type="text" className="form-control" value={this.state.ec2Phone} onChange={this.onEC2PhoneChange.bind(this)} />
                                </div>


                                <button type="submit" className="btn btn-primary" style={{ float: 'center' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onAddressChange(event) {
        this.setState({ address: event.target.value })
    }

    onEC1NameChange(event) {
        this.setState({ ec1Name: event.target.value })
    }

    onEC1PhoneChange(event) {
        this.setState({ ec1Phone: event.target.value })
    }

    onEC2NameChange(event) {
        this.setState({ ec2Name: event.target.value })
    }

    onEC2PhoneChange(event) {
        this.setState({ ec2Phone: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
}

export default Contact;