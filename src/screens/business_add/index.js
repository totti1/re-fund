import React, { Component } from "react";
import Menu from "../../components/menu";
import { Paper, Typography, Button } from "@material-ui/core";
import Input from "../../components/inputField";
import * as firebase from "firebase";
class View_Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        cooperative_name: null,
        business_title: null,
        description: null,
        people: null,
        capital: null
      }
    };
  }
  handleInput = (infos, e) => {
    let info = this.state.info;
    info[infos] = e.target.value;
    this.setState({ info });
  };

  createBusiness = async () => {
    const {
      info: { cooperative_name, business_title, description, people, capital }
    } = this.state;
    // console.log(info);
    const that = this;
    try {
      const inserted = await firebase
        .database()
        .ref(`/business`)
        .push({
          cooperative_name: cooperative_name,
          business_title: business_title,
          description: description,
          people: people,
          capital: capital
          // agent: this.props.currentUser.uid
        });
      // console.log(inserted);
    } catch (err) {
      console.log(err);
    }
  };
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
            {/* <form> */}
            <Input
              onChange={input => this.handleInput("cooperative_name", input)}
              label="Cooperative"
            />
            <Input
              onChange={input => this.handleInput("business_title", input)}
              label="Business Title"
            />
            <Input
              onChange={input => this.handleInput("description", input)}
              label="Description"
            />
            <Input
              onChange={input => this.handleInput("people", input)}
              label="People"
            />
            <Input
              onChange={input => this.handleInput("capital", input)}
              label="Capital"
            />
            {/* <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Cooperative
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Cooperative Name"
                  onChange={cooperative_name =>
                    this.setState({ cooperative_name })
                  }
                  // ref={(input) => { this.coopInput = input }}
                />
              </div> */}
            {/* <div class="form-group">
                <label for="exampleInputEmail1" style={{ color: "black" }}>
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Business Title"
                  onChange={business_title =>
                    this.setState({ business_title: business_title })
                  }
                  // ref={input => {
                  //   this.titleInput = input;
                  // }}
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
                  onChange={description =>
                    this.setState({ description: description })
                  }
                  // ref={input => {
                  //   this.descrInput = input;
                  // }}
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
                  onChange={people => this.setState({ people: people })}
                  // ref={input => {
                  //   this.peopleInput = input;
                  // }}
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
                  onChange={capital => this.setState({ capital: capital })}
                  // ref={input => {
                  //   this.capInput = input;
                  // }}
                />
              </div> */}
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={this.createBusiness.bind(this)}
            >
              Send
            </Button>
          </Paper>
        </Menu>
      </div>
    );
  }
}
export default View_Message;
