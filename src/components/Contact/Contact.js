import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            address: '',
            ec1Name: '',
            ec1Phone: '',
            ec2Name: '',
            ec2Phone: ''
        }
    }

    componentDidMount() {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            //headers: headers,
            body:JSON.stringify( { "username" :"user1" }),
        };
        
        fetch('/users/getContact', request)
            .then(response => response.json())
            .then(data => this.setState({ 
                phone: data.phone, 
                email: data.email, 
                address: data.address
            }));
         
            const requestEmergency = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                //headers: headers,
                body:JSON.stringify( { "username" :"user1" }),
            };
            
            fetch('/users/getEmergency', requestEmergency)
                .then(response => response.json())
                .then(data => this.setState({ 
                    ec1Name: data.contact1.name, 
                    ec1Phone: data.contact1.phone, 
                    ec2Name: data.contact2.name,
                    ec2Phone:data.contact2.phone,
                }));
    }

    render() {
        const { phone, email, address } = this.state;


        return (

            <div className="Login">
            <div class="page-wrapper" >
                <br></br>
                <div class="container-fluid">
                    <div class="card" style={{ width: 500, textAlign: 'center' }}>
                        <div style={{ textAlign: 'left' }}>
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <h5 style={{ textAlign: 'center' }}>Contact</h5>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="text" className="form-control" value={phone} onChange={this.onPhoneChange.bind(this)} />
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


                                <button type="submit" className="btn btn-primary" style={{ float: 'center' }} onClick={() => alert('saved')}>Save Changes</button>
                            </form>
                        </div>
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