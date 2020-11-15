import React from "react";
import "./form.scss";
import superagent from "superagent";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlinput: "",
      urloutput: "",
      clickedOn: "",
      results: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStuff = this.getStuff.bind(this);
  }

  handleChange = (event) => {
    let urlInput = event.target.name;
    this.setState({ [urlInput]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   urloutput: this.state.urlinput
    // });
    this.getStuff();
  };

  handleClick(event) {
    event.preventDefault();
    let foo = event.target.value;
    this.setState({
      clickedOn: foo
    });
    console.log("Click happened");
  }

  // change the get part to a variable is all we need - Joe
  async getStuff() {
    console.log("label for kristian", this.state.urlinput);
    const response = await superagent.get(this.state.urlinput);
    // console.log('res.body', response.body)
    const stuff = response.body.results || [];
    this.props.update(stuff);
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="url-input">
          URL:
          <input
            name="urlinput"
            value={this.state.urlinput}
            onChange={this.handleChange}
          // onClick={this.handleClick}
          />
          <button type="submit">GO!</button>
        </label>
        <hr />
        <div className="methods">
          <button
            type="radio"
            name="input"
            value="GET"
            onClick={this.handleClick.bind(this)}
            onChange={this.handleChange}
          >
            GET
          </button>
          <button
            type="radio"
            name="input"
            value="POST"
            onClick={this.handleClick.bind(this)}
            onChange={this.handleChange}
          >
            POST
          </button>
          <button
            type="radio"
            name="input"
            value="UPDATE"
            onChange={this.handleChange}
            onClick={this.handleClick.bind(this)}
          >
            UPDATE
          </button>
          <button
            type="radio"
            name="input"
            value="DELETE"
            onChange={this.handleChange}
            onClick={this.handleClick.bind(this)}
          >
            DELETE
          </button>
        </div>
        <hr />
        <label>
          <textarea
            value={this.state.clickedOn + " " + this.state.urloutput}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Form;
