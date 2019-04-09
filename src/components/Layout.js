import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.css";
import "./layout.css";

class Layout extends React.Component {
  componentDidMount() {
    if (window) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://forms.webriq.com/js/initForms`;
      const headScript = document.getElementsByTagName("script")[0];
      headScript.parentNode.insertBefore(script, headScript);

      const linkScript = document.createElement("script");
      linkScript.id = "mcjs";
      linkScript.src = `https://chimpstatic.com/mcjs-connected/js/users/137087abec66451b299f0ae53/cb377c9a3d7cdc590a6f1c0e5.js`;
      document.body.appendChild(linkScript);

      const fscript = document.createElement("script");
      fscript.src = `https://fareharbor.com/embeds/api/v1/?autolightframe=yes`;
      document.body.appendChild(fscript);
    }
  }
  render() {
    const { location, title, children, customclass } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let herobanner;

    if (location.pathname === rootPath) {
      herobanner = <Hero />;
    } else {
      herobanner = (
        <div className="hero-main">
          <div className="hero-main-bg" />
          <Container>
            <Row>
              <Col lg={8} md={9}>
                <h1 className="text-white">{title}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return (
      <div
        className={
          location.pathname === rootPath ? "home" : customclass || "page"
        }
      >
        <Header />
        {herobanner}
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
