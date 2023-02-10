// comps/formdisco.js
//
// minimum validation required on key fields

import React, { useState } from "react";

import Image from "next/image";

import { API } from "aws-amplify";
import { createDisco, updateDisco } from "../src/graphql/mutations";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Error } from "./error";

const DiscoAudiences = require("../utils/DiscoAudiences.json");
const DiscoFormats = require("../utils/DiscoFormats.json");
const DiscoLanguages = require("../utils/DiscoLanguages.json");
const DiscoPrices = require("../utils/DiscoPrices.json");
const DiscoSubjects = require("../utils/DiscoSubjects.json");
const DiscoTypes = require("../utils/DiscoTypes.json");
const SitePeriods = require("../utils/SitePeriods.json");
const SiteStyles = require("../utils/SiteStyles.json");

const slugify = require("slugify");

const LANG = "fr";

const FormDisco = (props) => {

  const action = props.action;
  const [disco, setDisco] = useState(props.input);
  const [error, setError] = useState(false);

  const handleUpdateDiscoSubjects = (key) => {
    let index = disco.subjects.indexOf(key)
    let subjects = disco.subjects
    if (index > -1) { subjects.splice(index, 1); setDisco({...disco, subjects }) }
    else if (disco.subjects.length > 0 ) { subjects.push(key); setDisco({...disco, subjects }) }
    else setDisco({...disco, subjects: [key]})
}

const handleUpdateDiscoLanguages = (key) => {
  let index = disco.languages.indexOf(key)
  let languages = disco.languages
  if (index > -1) { languages.splice(index, 1); setDisco({...disco, languages }) }
  else if (disco.languages.length > 0 ) { languages.push(key); setDisco({...disco, languages }) }
  else setDisco({...disco, languages: [key]})
}

const handleUpdateDiscoAudiences = (key) => {
  let index = disco.audiences.indexOf(key)
  let audiences = disco.audiences
  if (index > -1) { audiences.splice(index, 1); setDisco({...disco, audiences }) }
  else if (disco.audiences.length > 0 ) { audiences.push(key); setDisco({...disco, audiences }) }
  else setDisco({...disco, audiences: [key]})
}

const handleUpdateDiscoPeriods = (key) => {
  let index = disco.periods.indexOf(key)
  let periods = disco.periods
  if (index > -1) { periods.splice(index, 1); setDisco({...disco, periods }) }
  else if (disco.periods.length > 0 ) { periods.push(key); setDisco({...disco, periods }) }
  else setDisco({...disco, periods: [key]})
}

const handleUpdateDiscoStyles = (key) => {
  let index = disco.styles.indexOf(key)
  let styles = disco.styles
  if (index > -1) { styles.splice(index, 1); setDisco({...disco, styles }) }
  else if (disco.styles.length > 0 ) { styles.push(key); setDisco({...disco, styles }) }
  else setDisco({...disco, styles: [key]})
}

  const handleCreateDisco = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createDisco,
        variables: {
          input: {
            id: slugify(disco["name"]).toLowerCase(),
            ...disco
          },
        },
      });

      window.location.href = `/`;
    } catch (e) {
      console.error(e);
      setError("Nous n'avons pu enregistrer cette découverte");
    }
  };

  const handleUpdateDisco = async (event) => {
    event.preventDefault();

    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: updateDisco,
        variables: { input: disco },
      });

      window.location.href = `/discos/${disco.id}`;
    } catch (e) {
      console.error(e);
      setError("Nous n'avons pu enregistrer cette découverte");
    }
  };


  return (
    <div style={{color: "black"}}>
      <h4 style={{ fontWeight: "bold" }}>
        {action === "add" && "Créer la découverte"}
        {action === "update" && "Mettre à jour la découverte"}
      </h4>
      <Form style={{ fontSize: "0.9rem" }}>

      <Form.Group as={Row} style={{ marginTop: 20, paddingTop: 20 }}>
          <Col>
            <Form.Label>Identifiant de l'organisateur</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, organiserID: e.target.value })}
              value={disco.organiserID}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd" }}>
          <Col>
            <Form.Label>Nom</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, name: e.target.value })}
              value={disco.name}
              size="sm"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>En quelques mots ...</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, headline: e.target.value })}
              value={disco.headline}
              size="sm"
            />
          </Col>
        </Form.Group>
        
        {/* Identifiants, type et format */}
        <Form.Group as={Row} style={{ marginTop: 20}}>
          <Col>
            <Form.Label>Type</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Select as="select" size="sm" defaultValue={disco.type} onChange={(e) => setDisco({ ...disco, type: e.target.value })}>
                <option value={""}>Choisir le type</option>
              {Object.keys(DiscoTypes).map(x => <option key={x} value={x}>{DiscoTypes[x][LANG]}</option>)}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginTop: 20}}>
          <Col>
            <Form.Label>Format</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Select as="select" size="sm" defaultValue={disco.format} onChange={(e) => setDisco({ ...disco, format: e.target.value })}>
              <option value={""}>Choisir le format</option>
              {Object.keys(DiscoFormats).map(x => <option key={x} value={x}>{DiscoFormats[x][LANG]}</option>)}
            </Form.Select>
          </Col>
        </Form.Group>


        {/* Validité */}
        
        {["regular", "demand"].includes(disco.type) &&
        <>
          <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
          <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
            <Col>
              <Form.Label>Validité</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Check
                inline
                label="Permanente"
                onChange={() => setDisco({ ...disco, dateStart: "0000-01-01", dateEnd: "9999-12-31" })}
                checked={disco.dateEnd === "9999-12-31"}
              />
              <Form.Check
                inline
                label="Limitée"
                onChange={() => setDisco({ ...disco, dateStart: "", dateEnd: "" })}
                checked={disco.dateEnd !== "9999-12-31"}
              />
            </Col>
          </Form.Group>
        </>
        }
        {disco.dateStart !== "0000-01-01" &&
          <>
            <Form.Group as={Row} style={{ marginTop: 20 }}>
              <Col>
                <Form.Label>Date de début</Form.Label>
              </Col>
              <Col sm="9">
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setDisco({ ...disco, dateStart: e.target.value })
                  }
                  value={disco.dateStart}
                  size="sm"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} style={{ marginTop: 5 }}>
              <Col>
                <Form.Label>Date de fin</Form.Label>
              </Col>
              <Col sm="9">
                <Form.Control
                  type="text"
                  onChange={(e) => setDisco({ ...disco, dateEnd: e.target.value })}
                  value={disco.dateEnd}
                  size="sm"
                />
              </Col>
            </Form.Group>
          </>
        }

        {disco.type === "regular" &&
        <>
          <div style={{marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd"}}>Heures d'ouverture</div>
          <Form.Group as={Row} style={{marginTop: 20}}>
            <Col>
              <Form.Label>Lundi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, mon: e.target.value !== "" ? e.target.value.split(",").map(x => x.split("-")) : null }})}
                value={disco.openingHours && disco.openingHours.mon ?  disco.openingHours.mon.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            <Form.Text className="text-muted">
                Le format est 8h-17h pour une ouverture de 8h à 17h et 8h-12h,14h-17h pour deux créneaux par jour
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Mardi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, tue: e.target.value.split(",").map(x => x.split("-")) }})}
                value={disco.openingHours && disco.openingHours.tue?  disco.openingHours.tue.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Mercredi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, wed: e.target.value.split(",").map(x => x.split("-")) }})}
                value={disco.openingHours && disco.openingHours.wed ?  disco.openingHours.wed.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Jeudi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, thu: e.target.value.split(",").map(x => x.split("-")) }})}
                value={disco.openingHours && disco.openingHours.thu?  disco.openingHours.thu.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Vendredi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, fri: e.target.value.split(",").map(x => x.split("-")) }})}
                value={disco.openingHours && disco.openingHours.fri ?  disco.openingHours.fri.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Samedi</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, sat: e.target.value !== "" ? e.target.value.split(",").map(x => x.split("-")) : null }})}
                value={disco.openingHours && disco.openingHours.sat ?  disco.openingHours.sat.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{marginTop: 10}}>
            <Col>
              <Form.Label>Dimanche</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, openingHours: {...disco.openingHours, sun: e.target.value !== "" ? e.target.value.split(",").map(x => x.split("-")) : null }})}
                value={disco.openingHours && disco.openingHours.sun?  disco.openingHours.sun.map(x => x.join("-")).join(",") : ""}
                size="sm"
              />
            </Col>
          </Form.Group>
          </>
          }

        {/* Sites */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Identifiant du site principal</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, siteID: e.target.value })}
              value={disco.siteID}
              size="sm"
            />
          </Col>
        </Form.Group>

        {/* Prix */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Prix</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Select as="select" size="sm" defaultValue={disco.price} onChange={(e) => setDisco({ ...disco, price: e.target.value })}>
                <option value="">Choisir le prix</option>
                {Object.keys(DiscoPrices).map(x => <option key={x} value={x}>{DiscoPrices[x][LANG]}</option>)}
              </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Détails du prix</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, priceCommentary: e.target.value.split(",") })}
              value={disco.priceCommentary}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Réservation obligatoire</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Check
                inline
                label="Oui"
                onChange={() => setDisco({ ...disco, bookingRequired: true})}
                checked={disco.bookingRequired}
              />
              <Form.Check
                inline
                label="Non"
                onChange={() => setDisco({ ...disco, bookingRequired: false})}
                checked={!disco.bookingRequired}
              />
          </Col>
        </Form.Group>
  
        {/* Pictures */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20 }}>
          <Col>
            <Form.Label>Identifiants des photos</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, pictures: e.target.value.split(",") })}
              value={disco.pictures.join(",")}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Row
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        ><Col>
          {disco.pictures.map((x) => (
            <Image
              key={x}
              src={`https://patrimoniamedia175328-dev.s3.eu-west-1.amazonaws.com/public/sites/${x}`}
              className="shadow-1-strong rounded"
              alt="alternative text"
              priority
              style={{ objectFit: "cover", marginRight: 10 }}
              display="block"
              width={100}
              height={100}
            />
          ))}
          </Col>
        </Row>
        
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Durée</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, duration: e.target.value.split(",") })}
              value={disco.duration.join(",")}
              size="sm"
            />
          </Col>
        </Form.Group>
        {/* Facts */}
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Audiences</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(DiscoAudiences).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoAudiences(x)}
                label={DiscoAudiences[x][LANG]}
                checked={disco.audiences && disco.audiences.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Sujets</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(DiscoSubjects).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoSubjects(x)}
                label={DiscoSubjects[x][LANG]}
                checked={disco.subjects && disco.subjects.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Langues</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(DiscoLanguages).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoLanguages(x)}
                label={DiscoLanguages[x][LANG]}
                checked={disco.languages && disco.languages.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>

        {/* Adresse */}
        <Row style={{ margin: "30px 0px", borderTop: "1px solid #ddd" }} />
        <b>Adresse</b>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Rue</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, street: e.target.value },
                })
              }
              value={disco.address.street}
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
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, postalCode: e.target.value },
                })
              }
              value={disco.address.postalCode}
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
              type="text"
              onChange={(e) =>
                setDisco({
                  ...disco,
                  address: { ...disco.address, city: e.target.value },
                })
              }
              value={disco.address.city}
              size="sm"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 5 }}>
          <Col>
            <Form.Label>Infos pratiques</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
              type="text"
              onChange={(e) => setDisco({ ...disco, practicalInfo: e.target.value})}
              value={disco.practicalInfo}
              size="sm"
            />
          </Col>
        </Form.Group>


        <Form.Group as={Row} style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #ddd" }}>
          <Col>
            <Form.Label>Périodes</Form.Label>
          </Col>
          <Col sm="9">
            {Object.keys(SitePeriods).map((x) => (
              <Form.Check
                key={x}
                onChange={() => handleUpdateDiscoPeriods(x)}
                label={SitePeriods[x][LANG]}
                checked={disco.periods && disco.periods.includes(x)}
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
                onChange={() => handleUpdateDiscoStyles(x)}
                label={SiteStyles[x][LANG]}
                checked={disco.styles && disco.styles.includes(x)}
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Personnage(s) importants</Form.Label>
          </Col>
          <Col sm="9">
          <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, persons: e.target.value !== "" ? e.target.value.split(",") : [] })}
                value={disco.persons.join(",")}
                size="sm"
              />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginTop: 20, fontSize: "0.9rem" }}>
          <Col>
            <Form.Label>Evènement(s) importants</Form.Label>
          </Col>
          <Col sm="9">
            <Form.Control
                type="text"
                onChange={(e) => setDisco({ ...disco, events: e.target.value !== "" ? e.target.value.split(",") : []  })}
                value={disco.events.join(",")}
                size="sm"
              />
          </Col>
        </Form.Group>


        <Button
          onClick={action === "add" ? handleCreateDisco : handleUpdateDisco}
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

export default FormDisco;
