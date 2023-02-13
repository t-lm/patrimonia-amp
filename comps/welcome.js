// ./comps/welcome.js

import Image from "next/image";

import { Keys } from "../utils/dictionary";
import { LANG } from "../utils/auth";

export const Welcome = () => {
  return (
    <>
    {/*<Frieze />*/}
    <div
        style={{
          width: "100%",
          //backgroundColor: "#aaa",
          color: "black",
          backgroundColor: "#edebea",
          fontSize: "2.5rem",
          fontWeight: 700,
          padding: "20px",
          lineHeight: "3rem"
        }}
      >
        <span>{Keys[LANG]["welcome"]}</span>
        <span style={{ marginTop: 10, display: "block" }}>
          <Image src="/var/noun-man.svg"alt="" height={60} width={60}/>
          {/*<Image src="/var/noun-woman.svg" alt="" height={60} width={60} style={{marginLeft: 10}}/>*/}
          <Image src="/var/noun-pet.svg" alt="" height={60} width={60} style={{marginLeft: 0}}/>
          <Image src="/var/noun_family1.svg" alt="" height={60} width={60} style={{marginLeft: 0}}/>
          <Image src="/var/noun_friends.svg" alt="" height={60} width={60} style={{marginLeft: 2}}/>
          <Image src="/var/noun_family.svg" alt="" height={60} width={60} style={{marginLeft: 1}}/>
        </span>
        <span> 
        
        </span>
      </div>
    </>
  );
};
