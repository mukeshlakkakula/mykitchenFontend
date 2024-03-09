import { Component } from "react";
import DemoCarousel from "../Carousel";
import Chooseus from "../WhyChooseUs";

class Home extends Component {
  render() {
    return (
      <div>
        <DemoCarousel />
        <Chooseus />
      </div>
    );
  }
}

export default Home;
