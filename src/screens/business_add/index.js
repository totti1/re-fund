import React, { Component } from "react";
import Menu from "../../components/menu";
import { Paper, Typography } from "@material-ui/core";
import * as firebase from 'firebase';
class View_Message extends Component {
  constructor(props) {
    super(props)
    this.createBusiness = this.createBusiness.bind(this)
  }

  createBusiness = async () => {
    const title = this.titleInput.value
    const coop = this.coopInput.value
    const descr = this.descrInput.value
    const people = this.peopleInput.value
    const cap = this.capInput.value
    const business = {...this.props.business};
    const id = Date.now();
    await firebase.database().ref(`${business}`)
      .push({ 
      id: id,
      title: title,
      cooperative: coop,
      description: descr,
      number_Of_Peaple:people,
      capital: cap,
      agent: this.props.currentUser.uid
      }).then(response => {
      })
      .catch(err => {
        console.log('erro occured')
      });
    this.businessForm.reset()
    this.props.postSubmitHandler()
  }
  render() {
    return (
      <div>
        <Menu>
          <Paper
            style={{
              width: "60%",
              margin: "0 auto",
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Cooperative
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Cooperative Name"
                  ref={(input) => { this.coopInput = input }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Business Title"
                  ref={(input) => { this.titleInput = input }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" style={{ color: "black" }}>
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Description"
                  ref={(input) => { this.descrInput = input }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Peoples involved
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Amount of people involved"
                  ref={(input) => { this.peopleInput = input }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Capital
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Capital"
                  ref={(input) => { this.capInput = input }}
                />
              </div>
              <button type="submit" onClick={this.createBusiness.bind(this)} class="btn btn-dark">
                Send
              </button>
            </form>
          </Paper>
        </Menu>
      </div>
    );
  }
}
export default View_Message;
