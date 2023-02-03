// ./comps/separator.js
import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Frieze = () => {
  return (
    <Row
      style={{padding: "10px 0px 0px", margin: 0, backgroundColor: "white", border: "1px solid #eee"}}
    ><Col>
      <Image
        src="/var/noun-man.svg"
        alt="monument historiques"
        height={45}
        width={45}
        style={{ display: "inline" }}
      />
            <Image
        src="/var/noun-woman.svg"
        alt="monument historiques"
        height={45}
        width={45}
        style={{ display: "inline" }}
      />
                  <Image
        src="/var/noun-family.svg"
        alt="monument historiques"
        height={45}
        width={45}
        style={{ display: "inline" }}
      />
                        <Image
        src="/var/noun-pet.svg"
        alt="monument historiques"
        height={45}
        width={45}
        style={{ display: "inline" }}
      />
      </Col>
    </Row>
  );
};
