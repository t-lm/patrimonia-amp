// ./comps/error.js
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Error = (props) => {
  const error = props.error;
  console.log(props)

  const [show, setShow] = useState(true)

  return (
    <Modal show={show} style={{color: "black"}} onHide={() => setShow(false)}>
      <Modal.Body>
        <p>{error}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
