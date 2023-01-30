// ./pages/Sign.js

import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { getCurrentUser } from "../utils/auth"



const Sign = (props) => {

  // props
  try { origin = props.location.state.origin } catch (e) {}  

  // ids
  const userslug = getCurrentUser().userslug

  // state
  const history = useHistory();

  // redirect if signed-in
  useEffect(() => {
    if (userslug) return history.push({pathname: `/${userslug}`})
  }, [userslug, history]);

  return (

    <>This is a placeholder</>

  )
}

export default Sign
