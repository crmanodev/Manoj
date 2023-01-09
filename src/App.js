import React from "react";
import GlobalImport from "./GlobalImport";
import ResponsiveAppBar from "./components/navbar";
import SignIn from "./common/login";
import SignUp from "./common/signup";
import CardDetails from "./common/cardDetail";
import HomeTabs from "./common/homeTabs";
import AddAddress from "./common/addAddress";
import AddProduct from "./common/addProduct";
import ModifyProduct from "./common/modifyProduct";

function App() {
  return (
    <div>
      {/* <GlobalImport /> */}
      <ResponsiveAppBar />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <HomeTabs />
      {/* <CardDetails /> */}
      {/* <AddAddress /> */}
      <AddProduct />
    </div>
  );
}

export default App;
