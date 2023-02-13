// comps/formsite.js

import React, { useState, useEffect } from "react";

import Image from "next/image";

import { API } from "aws-amplify";
import { createSite, updateSite } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";
import { authKey } from "../utils/auth";

const SitePeriods = require("../utils/SitePeriods.json");
const SiteProtections = require("../utils/SiteProtections.json");
const SiteTypes = require("../utils/SiteTypes.json");
const SiteStyles = require("../utils/SiteStyles.json");
const slugify = require("slugify");

const FormSite = (props) => {
  const action = props.action;
  const lang = props.lang;
  const [site, setSite] = useState(props.input);
  const [error, setError] = useState(false);

  const handleUpdateSiteTypes = (key) => {
    let index = site.types.indexOf(key);
    let types = site.types;
    if (index > -1) {
      types.splice(index, 1);
      setSite({ ...site, types });
    } else if (site.types.length > 0) {
      types.push(key);
      setSite({ ...site, types });
    } else setSite({ ...site, types: [key] });
  };

  const handleUpdateSitePeriods = (key) => {
    let index = site.periods.indexOf(key);
    let periods = site.periods;
    if (index > -1) {
      periods.splice(index, 1);
      setSite({ ...site, periods });
    } else if (site.periods.length > 0) {
      periods.push(key);
      setSite({ ...site, periods });
    } else setSite({ ...site, periods: [key] });
  };

  const handleUpdateSiteStyles = (key) => {
    let index = site.styles.indexOf(key);
    let styles = site.styles;
    if (index > -1) {
      styles.splice(index, 1);
      setSite({ ...site, styles });
    } else if (site.styles.length > 0) {
      styles.push(key);
      setSite({ ...site, styles });
    } else setSite({ ...site, styles: [key] });
  };

  const handleUpdateSiteProtections = (key) => {
    let index = site.protections.indexOf(key);
    let protections = site.protections;
    if (index > -1) {
      protections.splice(index, 1);
      setSite({ ...site, protections });
    } else if (site.protections.length > 0) {
      protections.push(key);
      setSite({ ...site, protections });
    } else setSite({ ...site, protections: [key] });
  };

  const handleUpdateLinks = (text) => {
    let lines = text.split("\n");
    let links = lines.map((l) => ({
      www: l.split(",")[0],
      fr: l.split(",")[1],
    }));
    setSite({ ...site, links });
  };

  const handleCreateSite = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createSite,
        variables: {
          input: {
            id: slugify(site["name"]).toLowerCase(),
            ...site,
          },
        },
      });

      window.location.href = `/sites/${site.id}`;
    } catch (e) {
      console.error(e);
      setError("There is an error with this form");
    }
  };

  const handleUpdateSite = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateSite,
        variables: { input: site },
      });

      window.location.href = `/sites/${site.id}`;
    } catch (e) {
      console.error(e);
      //throw new Error(errors[0].message);
      setError("There is an error with this form");
    }
  };

  useEffect(() => {
    const handleTranslate = async () => {
      const response = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
       // mode: "no-cors",
        headers: {
          "Authorization": "DeepL-Auth-Key 14cf515d-0f25-c9da-68ff-9c931cd63244:fx",
          "User-Agent": "YourApp/1.2.3",
          "Content-Type": "application/x-www-form-urlencoded",
          //"DeepL-Auth-Key": authKey,
          "Content-Length": 62
        },
        body: "text=hello&source_lang=EN&target_lang=FR&preserve_formatting=1",
      });
      return response;
    };

    handleTranslate()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ color: "black" }}>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Créer le site"}
        {action === "update" && "Mettre à jour le site"}
      </h4>
      <Form style={{ fontSize: "0.9rem" }}>
        <Form.Group as={Row} style={{ marginTop: 50 }}>
          <Col>
            <Form.Label>Nom</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setSite({ ...site, name: e.target.value })}
              value={site.name}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>En une phrase ...</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              as="textarea"
              rows={2}
              onChange={(e) => setSite({ ...site, headline: e.target.value })}
              value={site.headline}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <b>Adresse</b>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Rue</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setSite({
                  ...site,
                  address: { ...site.address, street: e.target.value },
                })
              }
              value={site.address.street}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Code postal</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setSite({
                  ...site,
                  address: { ...site.address, postalCode: e.target.value },
                })
              }
              value={site.address.postalCode}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Ville</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) =>
                setSite({
                  ...site,
                  address: { ...site.address, city: e.target.value },
                })
              }
              value={site.address.city}
              size="sm"
            />
          </Col>
        </Form.Group>

        {/* Description */}
        <Form.Group
          as={Row}
          style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd" }}
        >
          <Col>
            <Form.Label>Description</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              as="textarea"
              rows={15}
              onChange={(e) =>
                setSite({ ...site, description: e.target.value })
              }
              value={site.description}
              size="sm"
              required
            />
          </Col>
        </Form.Group>

        {/* Photo */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <b>Photo principale</b>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Identifiant de la photo</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              type="text"
              onChange={(e) => setSite({ ...site, pictureID: e.target.value })}
              value={site.pictureID}
              size="sm"
            />
          </Col>
        </Form.Group>
        <div
          style={{
            width: "100%",
            height: 400,
            position: "relative",
            display: "block",
            marginTop: 20,
          }}
        >
          <Image
            src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${site.pictureID}`}
            className="shadow-1-strong rounded"
            alt="alternative text"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Facts */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <b>Carte d'identité</b>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Type de site</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SiteTypes).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateSiteTypes(x)}
                label={SiteTypes[x][lang]}
                checked={site.types.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Périodes</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SitePeriods).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateSitePeriods(x)}
                label={SitePeriods[x][lang]}
                checked={site.periods && site.periods.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Styles architecturaux</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SiteStyles).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateSiteStyles(x)}
                label={SiteStyles[x][lang]}
                checked={site.styles && site.styles.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Protections</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SiteProtections).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateSiteProtections(x)}
                label={SiteProtections[x][lang]}
                checked={site.protections && site.protections.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Liens</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => handleUpdateLinks(e.target.value)}
              value={site.links.map((x) => `${x.www},${x.fr}`).join("\n")}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Button
          onClick={action === "add" ? handleCreateSite : handleUpdateSite}
          size="md"
          style={{
            marginTop: 50,
            backgroundColor: "pink",
            border: 0,
            color: "black",
            fontWeight: "bold",
            padding: "5px 30px",
          }}
        >
          Enregistrer
        </Button>
      </Form>
      {error && <Error error={error} />}
    </div>
  );
};

export default FormSite;
