import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import One from "../../../assets/img/prototipos/One.png";
import Boletador from "../../../assets/img/prototipos/boletador.png";
import VxMeetings from "../../../assets/img/prototipos/meetings.png";
import VxInforma from "../../../assets/img/prototipos/informa.png";
import VxCadastro from "../../../assets/img/prototipos/cadastro.png";

import styles from "../../../assets/jss/ui-kit/views/componentsSections/exampleStyle";
import { Section, Container, Title } from './Styles';

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <Section>
      <Container>
        <Title>
          <h2>Protótipos</h2>
        </Title>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <a href="https://www.figma.com/file/RZJGrQjEZ8efvrQWfGEtDd/Vx-ONE-2020%2F2-%7C-Altera%C3%A7%C3%B5es" target="_blank" rel="noreferrer">
              <img
                src={One}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                Ver Vórtx One
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a href="https://www.figma.com/file/yFKRSEP0ZeUWaDJJvYl5D4/Boletador-no-Figma" target="_blank" rel="noreferrer">
              <img
                src={Boletador}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                Vórtx One - Boletador
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a href="https://www.figma.com/file/hILlHmhOPSbnKi4KpCJFmV/Vx-Meetings-altera%C3%A7%C3%B5es" target="_blank" rel="noreferrer">
              <img
                src={VxMeetings}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                VxMeetings
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a href="https://www.figma.com/file/NwUNxagGJZ4fqOj9Yvjdv1/Vx-Informa-Figma" target="_blank" rel="noreferrer">
              <img
                src={VxInforma}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                VxInforma+
              </Button>
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <a href="https://www.figma.com/file/g8CW8zKZYF3JuAAqy741p7/Vx-Cadastro" target="_blank" rel="noreferrer">
              <img
                src={VxCadastro}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                VxCadastro
              </Button>
            </a>
          </GridItem>
          
        </GridContainer>
      </Container>
    </Section>
  );
}
