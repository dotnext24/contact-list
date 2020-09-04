import React, { Component } from 'react'
import axios from 'axios'

 class ContactDetail extends Component {
     constructor(props){
         super(props)
         this.state={
             contact:{}
         }
     }

     componentDidMount(){
        
         const baseUrl = "https://localhost:44374/";
         const id=this.props.match.params.id;
        let self = this;
        axios.get(`${baseUrl}api/Contacts/${id}`)
            .then(function (response) {
                // handle success
                self.setState({
                    contact: response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
     }
    render() {
        if(!this.state.contact || !this.state.contact.name)
        return "";
        return (
            <div>
                <h2>Contact Detail</h2>
                <form>
  <div className="form-row">
    <div className="col">
    <label for="colFormLabelSm" className="col-sm-4 col-form-label ">Name</label>
    <div className="col-sm-8">
      <input type="text" className="form-control form-control-sm" value={this.state.contact.name}  />
    </div>
    </div>
    <div className="col">
    <label for="colFormLabelSm" className="col-sm-4 col-form-label " >Address</label>
    <div className="col-sm-8">
      <input type="text" className="form-control form-control-sm" value={this.state.contact.address}  />
    </div>
    </div>
    <div class="col">
    <label for="colFormLabelSm" className="col-sm-6 col-form-label ">Last Date Contacted</label>
    <div className="col-sm-6">
      <input type="text" className="form-control form-control-sm" value={this.state.contact.lastDateContacted}  />
    </div>
    </div>
  </div>

  <div className="form-row">
    <div className="col">
    <label for="colFormLabelSm" className="col-sm-4 col-form-label ">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control form-control-sm" value={this.state.contact.email}  />
    </div>
    </div>
    
    <div className="col">
    <label for="colFormLabelSm" className="col-sm-4 col-form-label " >Comments</label>
    <div className="col-sm-8">
        <textarea cols={30} >{this.state.contact.comments}</textarea>      
    </div>
    </div>

    <div className="col">
    <label for="colFormLabelSm" className="col-sm-6 col-form-label " ></label>
    <div className="col-sm-6">
             
    </div>
    </div>
   
  </div>


</form>

<input type="button" className="btn btn-success" value="Save" />
            </div>
        )
    }
}


export default ContactDetail
