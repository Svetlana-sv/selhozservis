import React from 'react';
import styles from "./Home.module.scss"
import {Carousel} from "antd";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

const contentStyle: React.CSSProperties = {
  height: '30vh',
  color: '#fff',
  lineHeight: '30vh',
  textAlign: 'center',
  background: '#535e75',
};
const Home = () => {

  return <React.Fragment>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>Качественные средства для роста растений по выгодным ценам</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>


  </React.Fragment>
}

export default Home;