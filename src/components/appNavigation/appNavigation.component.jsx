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
import { menuNav } from "../../actions/index";

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNav: {},
    };
  }

  render() {
    console.log(this.props, "++hj,hdfbijlknbfsdajk++++");
    // changeTheNumber = useSelector(state => state.ManuBar);
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
              <NavigationSection />
              <ApplicationArea />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menuNav: state,
});

const mapDispatchToProps = () => ({
  // console.log(state, "++++++");
  menuNav,
});
export default connect(mapStateToProps, mapDispatchToProps())(AppNavigation);

// export default AppNavigation;
