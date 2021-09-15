import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUser: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUser: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUser: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <input
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
          //   className={classes.finder}
        />
        <ErrorBoundary>
          <Users users={this.state.filteredUser} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input
//         type="search"
//         onChange={searchChangeHandler}
//         className={classes.finder}
//       />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
