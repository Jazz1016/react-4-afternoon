import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({ students: results.data });
      });
  }

  render() {
    const studentsDisplay = this.state.students.map((el, index) => {
      return (
        <Link to={`/student/${el.id}`}>
          <h3 key={index}>
            {el.first_name} {el.last_name}
          </h3>
        </Link>
      );
    });
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <Link to="/">
          <h3>Back to home</h3>
        </Link>
        <h2>ClassList:{studentsDisplay}</h2>
      </div>
    );
  }
}
