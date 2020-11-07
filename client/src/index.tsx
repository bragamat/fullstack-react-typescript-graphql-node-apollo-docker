import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Signin, Signup } from "./pages";
import GlobalStyle from "./components/globals/styles";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Root = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/singin" component={Signin} />
      <Route path="/singup" component={Signup} />
    </Switch>
  </Router>
);

const Application = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
