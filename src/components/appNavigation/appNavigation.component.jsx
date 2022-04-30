import React, { Component, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogogSection from "./logoSection.component";
import NavigationSection from "./naviagtionSection.component";
import ApplicationArea from "./applicationArea.component";
import Classes from "./_appNavigation.module.scss";
import { useSelector, useDispatch, connect } from "react-redux";

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            className={Classes.navigationBar}
            sx={{ backgroundColor: "#ffff" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                <div className={Classes.Banner}>
                  <LogogSection />
                </div>
              </Typography>
              <div className="NavigationSection_Mobile">
                {this.props.MenuBar ? <NavigationSection /> : null}
              </div>
              <div className="NavigationSection_Laptop">
                <NavigationSection />
              </div>
              <ApplicationArea />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "state");
  return state;
};

export default connect(mapStateToProps)(AppNavigation);

 
