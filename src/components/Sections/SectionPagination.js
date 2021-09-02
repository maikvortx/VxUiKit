import React from "react";
// core components
import GridContainer from "../../../library/components/Grid/GridContainer";
import GridItem from "../../../library/components/Grid/GridItem";
import Pagination from "../../../library/components/Pagination/Pagination";

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
                <Pagination pageCount={7}/>
                <Pagination pageCount={20}/>
              </GridItem>
              </GridItem>
            </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
