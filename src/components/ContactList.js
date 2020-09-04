import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom';

 class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }

        this.onContactClick=this.onContactClick.bind();
    }

    componentDidMount() {
        const baseUrl = "https://localhost:44374/";
        let self = this;
        axios.get(`${baseUrl}api/Contacts`)
            .then(function (response) {
                // handle success
                self.setState({
                    contacts: response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    onContactClick=(id)=>{
      console.log('contact id', id)
      if(id)      
      this.props.history.push(`/contact/${id}`)
      

    }


    render() {
        const defaultDate="0001-01-01T00:00:00";
        if (!this.state.contacts) {
            return "";
        }

       
        return (
            <div>
                <h2>Contact List ({this.state.contacts.length})</h2>
                <input type="button" className="btn btn-success btn-sm" value="Create New Contact" />
                <table className="table">
                    <thead>
                        <tr >

                            <th scope="col">Name (Job Title)</th>
                            <th scope="col">Company</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Last Date Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //   map over contacts and created row
                            this.state.contacts.map((c, i) => {
                                return <tr onClick={()=>this.onContactClick(c.id)} key={i}>

                                    <td>{c.name}{c.jobTitle}</td>
                                    <td>{c.companyName}</td>
                                    <td>{c.phone}</td>

                                    <td>{c.address}</td>
                                    <td>{c.email}</td>
                                    <td>{ c.lastDateContacted!=defaultDate? new Date(c.lastDateContacted).toLocaleDateString():""}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

            </div>
        )
    }
}

export default  withRouter(ContactList)