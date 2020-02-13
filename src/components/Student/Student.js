import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => this.setState({ studentInfo: response.data }));
  }

  render() {
    console.log(this.state.studentInfo);
    const { studentInfo } = this.state;
    return (
      <div className="box">
        <h1>Student</h1>

        <Link to={`/classlist/${studentInfo.class}`}></Link>
        <h1>
          {studentInfo.first_name} {studentInfo.last_name}
        </h1>
        <h3>{studentInfo.grade}</h3>
        <h3>{studentInfo.email}</h3>
        <h3>Back</h3>
      </div>
    );
  }
}
