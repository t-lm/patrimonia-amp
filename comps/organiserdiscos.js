// ./comps/organiserdiscos.js

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Keys } from "../utils/dictionary";

const LANG = "fr";

export const OrganiserDiscos = (props) => {
  const discos = props.discos;

  return (
    <>
        <section
          style={{
            backgroundColor: "white",
            padding: 10,
            marginTop: 30,
          }}
        >
          <h4>{Keys[LANG].visits}</h4>
        </section>
        
        <section style={{padding: 10}}>
          
          { discos.map((v) => (
          <Row
            key={v.id}
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "white",
            }}
          >
        
        
            <Col xs={4} md={2} style={{ padding: 0 }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  position: "relative",
                  display: "block",
                }}
              >
                {v.pictures &&
                  Array.isArray(v.pictures) &&
                  v.pictures.length > 0 && (
                    <Image
                      src={`/sites/${v.pictures[0]}`}
                      className="shadow-1-strong rounded"
                      alt={v.name}
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                    />
                  )}
              </div>
            </Col>

            <Col style={{ marginLeft: 20 }}>

              <Row>
                <Col xs={12} md={8}>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginTop: 10,
                      fontSize: "1.1rem",
                    }}
                  >
                    <Link
                      href={`/visits/${v.id}`}
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      {v.name}
                    </Link>
                  </span>
                  </Col>
                <Col xs={12} md={4}>
                  {v.subjects && (
                    <div style={{ float: "right" }}>
                      {v.subjects.map((sub, i) => (
                        <span
                          key={sub}
                          style={{
                            backgroundColor: DiscoSubjects[sub]["color"],
                            color: "white",
                            fontSize: "0.8rem",
                            padding: 4,
                            borderRadius: 4,
                            marginLeft: i > 0 && 7,
                          }}
                        >
                          {sub in DiscoSubjects && (
                            <span>{DiscoSubjects[sub][LANG]}</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>

              <p
                style={{
                  margin: "10px 0px 5px",
                  paddingTop: 0,
                  fontSize: "0.9rem",
                }}
              >
                <a>{v.headline}</a>
              </p>

              <p
                style={{
                  marginBottom: 5,
                  paddingTop: 0,
                  fontWeight: "bold",
                  marginTop: 10,
                  fontSize: "0.9rem",
                }}
              >
                {v.type && (
                  <span>
                    {v.type in DiscoTypes
                      ? DiscoTypes[v.type][LANG]
                      : v.type}
                  </span>
                )}
              </p>

              <p
                style={{
                  marginBottom: 5,
                  paddingTop: 0,
                  marginTop: 10,
                }}
              >
                {v.sites &&
                  Array.isArray(v.sites) &&
                  v.sites.map((site, i) => (
                    <span
                      key={site}
                      style={{
                        backgroundColor: "#eee",
                        fontSize: "0.8rem",
                        padding: 4,
                        borderRadius: 4,
                        marginLeft: i > 0 && 7,
                      }}
                    >
                      {allSites.find((x) => x.id === site) && (
                        <span>{allSites.find((x) => x.id === site).name}</span>
                      )}
                    </span>
                  ))}
              </p>
            </Col>
          </Row>
                      ))} 
        </section>
      </>
  );
};
