import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const cxt = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(cxt) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <button onClick={cxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    //      );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
