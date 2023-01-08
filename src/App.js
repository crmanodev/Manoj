import React from "react";
import GlobalImport from "./GlobalImport";
import ResponsiveAppBar from "./components/navbar";
import SignIn from "./common/login";
import SignUp from "./common/signup";
import CardDetails from "./common/cardDetail";

function App() {
  return (
    <div>
      {/* <GlobalImport /> */}
      <ResponsiveAppBar />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <CardDetails />
    </div>
  );
}

export default App;
