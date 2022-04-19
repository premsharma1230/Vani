import React, { Component } from "react";
import { HomeBanner } from "../../api/api";
import AppNavigation from "../../components/appNavigation/appNavigation.component";
import HomeContent from "../homeContent/homeContent.component";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const loadData = () => {
      HomeBanner().then(response => {
        this.setState(response.data);
      });
    };
    loadData();
  }

  render() {
    const image = this.state.image;

    return (
      <div className="Main_Home_Content">
        <AppNavigation />
        <div>
          <HomeContent imageUrl={image} />
        </div>
      </div>
    );
  }
}

export default HomePage;
