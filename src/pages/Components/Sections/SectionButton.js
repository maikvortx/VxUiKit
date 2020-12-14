import React from "react";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import GetApp from "@material-ui/icons/GetApp";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import { Section, Container, Title } from './Styles';

export default function SectionButton() {
 
  return (
    <Section>
      <Container>
        <div id="buttons">
          <Title>
            <h3>Botões</h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Primário</small></h3>
              </Title>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="contained" color="primary" id="Button">Default</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="contained" color="primary" id="Button" disabled>Disabled</Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Secundário</small></h3>
              </Title>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="outlined" color="outlined">
                  Default
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Button variant="outlined" color="outlined" disabled>
                  Disabled
                </Button>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Variações de botões</small></h3>
              </Title>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">
                    <GetApp/> Com ícone
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Button color="outlined">
                    <InsertDriveFile/> Download da tabela
                  </Button>
                  <Button color="primary" variant="outlined">
                    Anexar mais arquivos
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <Button justIcon round color="primary">
                    <Favorite/>
                  </Button>
                  <Button color="primary" simple>
                    simple
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Title>
                <h3><small>Tamanho</small></h3>
              </Title>
              <GridContainer justify="left">
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" size="sm">Small</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">Regular</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary" size="lg">Large</Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
