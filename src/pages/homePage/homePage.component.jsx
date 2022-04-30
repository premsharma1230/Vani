import React, { Component } from "react";
import { getCartList, HomeBanner } from "../../api/api";
import AppNavigation from "../../components/appNavigation/appNavigation.component";
import HomeContent from "../homeContent/homeContent.component";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
    const cartId = JSON.parse(sessionStorage?.getItem("cartIdLocal"));
    const loadData = () => {
      HomeBanner().then(response => {
        this.setState(response.data);
      });
      if (!token && !cartId) {
        getCartList().then(elem => {
          sessionStorage.setItem("cartIdLocal", JSON.stringify(elem?.cart_id));
        });
      } else {
        getCartList(token).then(elem => {
          sessionStorage.setItem(
            "cartIdWithToken",
            JSON.stringify(elem?.cart_id)
          );
        });
      }
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
