// pages/index.js
//
// not the right way to access dynamo - needs to be through IAM

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../../comps/layout";

const COLORS = {
"pink": "#F6C4CD",
"yellow": "#f5e39f",
"salmon": "#f5dfcd",
"orange": "#e29e37",
"green": "#b3be91",
"blue": "#b4dcff",
"amare_pink": "#f985a4",
"amare_blue": "#266dff",
"amare_orange": "#fb4333",
"amare_grey": "#f9f9f9",
"amare_brown": "#b08260",
"amare_green": "#149E71",
"amare_yellow": "#fcc933",
"amare_red": "#e13028",
"beziers_blue": "#d4e9fb",
"beziers_green": "#e2e2d7",
"beziers_yellow": "#ebd8b1"
}

const Colors = () => {

 
  return (
    <Layout>

      {/* Main */}
      {Object.keys(COLORS).map(c => 
      <Row key={c} style={{marginTop: 10}}>
        <Col style={{backgroundColor: COLORS[c], height: 50, width: 50, display: "block" }}></Col>
        <Col>{c} [{COLORS[c]}]</Col>
      </Row> )}
          
    </Layout>
  );
}

export default Colors