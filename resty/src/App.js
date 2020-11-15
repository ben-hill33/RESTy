import React from "react";
import Header from "./components/header/header.js";
import Form from "./components/form/form.js";
import MainBody from "./components/main/main.js";
import Footer from "./components/footer/footer.js";
import Results from "./components/results/results.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      results: [],
      test: "API Results"
    };
  }

  handleUpdateState = (value) => {
    // event.preventDefault();
    console.trace({ value });
    let results = this.state.results;
    results.push(value);
    this.setState({ results: results });
    // console.log(this.state);
  };

  render() {
    console.log("this.state in App render", this.state);
    return (
      <>
        <Header />
        <hr />
        <Form update={this.handleUpdateState} />
        <MainBody />
        <hr />
        <Results results={this.state.results} test={this.state.test} />
        <Footer />
      </>
    );
  }
}

export default App;