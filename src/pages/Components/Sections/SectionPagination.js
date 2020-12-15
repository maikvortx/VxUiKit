import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Pagination from "../../../components/Pagination/Pagination";

import { Section, Container, Title } from './Styles';


export default function SectionPagination() {
  return (
    <Section>
      <Container>
        <div id="pagination">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Title>
                <h3>Paginação</h3>
              </Title>
              <GridItem xs={12} sm={12} md={6}>
                <Pagination />
              </GridItem>
              </GridItem>
            </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
