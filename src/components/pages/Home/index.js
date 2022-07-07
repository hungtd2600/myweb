import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import Conveyor from '../../Conveyor';
import ProductGroup1 from '../../ProductGroup/ProductGroup1';
import ProductGroup2 from '../../ProductGroup/ProductGroup2';
import ProductGroup3 from '../../ProductGroup/ProductGroup3';

export default function Home() {
  return (
    <div>
      <Header />
      <Container style={{ margin: "15px auto" }}>
        <Row>
          <Conveyor />
        </Row>
        <Row>
          <div style={{ margin: "15px auto" }}>
            <img style={{ width: "100%" }} src="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/policy.png?1635568039150"></img>
          </div>
        </Row>
        <Row>
          <ProductGroup1 />
          <ProductGroup2 />
          <ProductGroup3 />
        </Row>

      </Container>
      <Footer />
    </div>
  )
}
