import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import { Section, Container, Title } from './Styles';
import CustomTable from "../../../components/CustomTable/CustomTable";

const useStyles = makeStyles();

export default function SectionTable() {
  const classes = useStyles();
  return (
    <Section>
      <Container>
        <div id="tabela">
          <Title>
            <h3>Tabela</h3>
          </Title>
          <CustomTable/>
        </div>
      </Container>
    </Section>
  );
}
