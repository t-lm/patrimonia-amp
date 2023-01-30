import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav';

import { Keys } from "../utils/dictionary";

const LANG = "fr";
export const siteTitle = 'Patrimonia';

export default function Layout({ children }) {

  return (

    <div className={styles.container} style={{padding: "0px 10px"}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover heritage sites with the people who knows them best"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Navbar expand="md" style={{borderBottom:"1px solid #dddddd", padding: "10px 0px", marginTop: 5 }}>
        <Navbar.Brand style={{display: "flex", alignItems: "center", paddingRight: 30}} href="/">
          <Image
            alt="Patrimonia"
            src={`/logo_pink.png`}
            width={30}
            height={30}
            className="d-inline-block align-top"
          />
          <span style={{paddingLeft: 20, fontWeight: 700, fontSize: "1.7rem", color: "black" }}>patrimonia</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link style={{margin: "0px 20px", color: 'black', fontWeight: 'bold'}} href="/">Posts</Nav.Link>*/}
            <Nav.Link style={{margin: "0px 20px", color: 'black', fontWeight: 'bold'}} href="/sites">{Keys[LANG]["sites"]}</Nav.Link>
            <Nav.Link style={{margin: "0px 20px", color: 'black', fontWeight: 'bold'}} href="/media">Media</Nav.Link>
            <Nav.Link style={{margin: "0px 20px", color: 'black', fontWeight: 'bold'}} href="/admin">Admin</Nav.Link>
            {/*<Nav.Link style={{margin: "0px 20px", color: 'black', fontWeight: 'bold'}} href="/guides">{Keys[LANG]["guides"]}</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <main style={{marginTop: 30}}>{children}</main>

      <footer>
        <div style={{fontSize: "0.8rem", color: "grey", borderTop: "1px solid #eee", paddingTop: 10, marginTop: 50, textAlign: "center"}}>
          © Patrimonia 2023 - <a style={{color: "grey"}} href="mailto:hi@patrimonia.app">{Keys[LANG]['getInTouch']}</a>
        </div>
      </footer>

    </div>

);
}
