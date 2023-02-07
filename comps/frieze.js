// ./comps/separator.js
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Frieze = ({style}) => {
  return (
    <Row
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      <Col style={{padding: 0}}>
        <div
        style={{
          ...style,
          border: "1px solid #eee",
          height:"80px",
          backgroundImage: "url(/friezes/vld_0.1.svg)",
          backgroundRepeat: "repeat-x" 
        }}
      />
      </Col>
    </Row>
  );
};
