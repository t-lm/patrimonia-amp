// ./comps/welcome.js

import Image from "next/image";

import { Frieze } from "../comps/frieze";

export const Welcome = () => {
  return (
    <>
    {/*<Frieze />*/}
    <div
        style={{
          width: "100%",
          //backgroundColor: "#aaa",
          //backgroundColor: "#d4e9fb",
          backgroundColor: "#edebea",
          fontSize: "2.5rem",
          fontWeight: 700,
          padding: "30px 20px",
          lineHeight: "3rem"
        }}
      >
        <span> 
          DÉCOUVRIR LE PATRIMOINE AVEC SES MEILLEURS GUIDES
          <Image src="/var/noun-family.svg" alt="" height={60} width={60} style={{marginLeft: 10}}/>
          <Image src="/var/noun-man.svg"alt="" height={60} width={60} style={{marginLeft: 10}}/>
          <Image src="/var/noun-woman.svg" alt="" height={60} width={60} style={{marginLeft: 10}}/>
          <Image src="/var/noun-pet.svg" alt="" height={60} width={60} style={{marginLeft: 10}}/>
        </span>
        <span style={{ display: "block" }}>
        
        
        </span>
        <span> 
        
        </span>
      </div>
    </>
  );
};
