import React from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Paginations from "../../../components/Pagination/Pagination";

import { Section, Container, Title } from './Styles';


export default function SectionPagination() {
  return (
    <Section>
      <Container>
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Title>
                <h3>Paginação</h3>
              </Title>
              <GridItem xs={12} sm={12} md={6}>
              <Paginations
                pages={[
                  { text: "<" },
                  { active: true, text: 1 },
                  { text: 2 },
                  { text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: ">" }
                ]}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Paginations
                    pages={[
                      { text: "<" },
                      { active: true, text: 1 },
                      { text: 2 },
                      { text: 3 },
                      { text: "..." },
                      { text: 19 },
                      { text: ">" }
                    ]}
                    color="info"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Paginations
                    pages={[
                      { text: "<" },
                      { active: true, text: 1 },
                      { text: 2 },
                      { text: 3 },
                      { text: "..." },
                      { text: 19 },
                      { text: ">" }
                    ]}
                    color="info"
                  />
                </GridItem>
              </GridItem>
            </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
