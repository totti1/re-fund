import React, { Component } from "react";
import Menu from "../../components/menu";
import edit from "../../assets/images/icons/edit.png";
// import { Link } from 'react-router-dom'
// import "./styles/login.css";

class Business_Analysis extends Component {
  render() {
    return (
      <div>
        <Menu>
          <div className="container mypadding">
            <h3 style={{ marginBottom: 50 }}>Farmer Cooperative Stats,</h3>
            <table class="table" style={{ backgroundColor: "white" }}>
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Sponsor</th>
                  <th scope="col">Donations</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Remaining Amount</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tears Fund</td>
                  <td>2</td>
                  <td>2000$</td>
                  <td>500$</td>
                  <td>
                    <img
                      src={edit}
                      alt="Edit btn"
                      width={30}
                      height={30}
                      style={{ alignSelf: "center" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Unesco</td>
                  <td>1</td>
                  <td>7000$</td>
                  <td>0$</td>
                  <td>
                    <img
                      src={edit}
                      alt="Edit btn"
                      width={30}
                      height={30}
                      style={{ alignSelf: "center" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Milka</td>
                  <td>9</td>
                  <td>10000$</td>
                  <td>0$</td>
                  <td>
                    <img
                      src={edit}
                      alt="Edit btn"
                      width={30}
                      height={30}
                      style={{ alignSelf: "center" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Denzel Washigton</td>
                  <td>5</td>
                  <td>8000$</td>
                  <td>1000$</td>
                  <td>
                    <img
                      src={edit}
                      alt="Edit btn"
                      width={30}
                      height={30}
                      style={{ alignSelf: "center" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Menu>
      </div>
    );
  }
}
export default Business_Analysis;
