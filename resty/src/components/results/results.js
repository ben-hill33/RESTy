import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props); // recieves results from API call via props
    console.log(this.props);
  }

  render() {
    return (
      <>
        <h2>{this.props.test}</h2>
        <div>
          {console.log("props", this.props.results)}
          {this.props.results.map((item) => {
            <div>{this.item}</div>;
          })}
        </div>
      </>
    );
  }
}

export default Results;
