import React from "react";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Small from "../../../components/Typography/Small";
import GetApp from "@material-ui/icons/GetApp";

import { Section, Container, Title, Text } from './Styles';

export default function SectionTypography() {
  return (
    <Section>
      <Container>
        <div id="typography">
          <Title><h3>Tipografia</h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={5}>
              <Title>
                <h3>
                  <span color={"#cb1e25"}>Josefin Sans</span> - Font Family
                  <a href='fonts/josefinsans.zip' download><GetApp/></a>
                </h3>
              </Title>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <Title>
                    <h1>H1 -Título</h1>
                    <p>Josefin Sans Regular - 48pt</p>
                  </Title>
                  <Title >
                    <h2>H2 -Título</h2>
                    <p>Josefin Sans Regular - 40pt</p>
                  </Title>
                  <Title>
                    <h3>H3 -Título</h3>
                    <p>Josefin Sans Regular - 32pt</p>
                  </Title>
                  <Title>
                    <h4>H4 -Título</h4>
                    <p>Josefin Sans Regular - 24pt</p>
                  </Title>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <div>
                    <h1 fontWeight={700}>H1 -Título</h1>
                    <p>Josefin Sans Bold - 48pt</p>
                  </div>
                  <div>
                    <h2 fontWeight={700}>H2 -Título</h2>
                    <p>Josefin Sans Bold - 40pt</p>
                  </div>
                  <div>
                    <h3 fontWeight={700}>H3 -Título</h3>
                    <p>Josefin Sans Bold - 32pt</p>
                  </div>
                  <div>
                    <h4 fontWeight={700}>H4 -Título</h4>
                    <p>Josefin Sans Bold - 24pt</p>
                  </div>
                </GridItem>
              </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={7}>
                <Title fontFamily='Open Sans'>
                  <h3>
                    <span color="#cb1e25">Open Sans</span> - Font Family
                    <a href='fonts/Open_Sans.zip' download><GetApp/></a>
                  </h3>
                </Title>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <Title fontFamily='Open Sans'>
                        <h1>H1 - Título</h1>
                      </Title>
                      <p>Open Sans - 48pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans'>
                        <h2>H2 - Título</h2>
                      </Title>
                      <p>Open Sans - 40pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans'>
                        <h3>H3 - Título</h3>
                      </Title>
                      <p>Open Sans - 32pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans'>
                        <h4>H4 - Título</h4>
                      </Title>
                      <p>Open Sans - 24pt</p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={600}>
                        <h1>H1 - Título</h1>
                      </Title>
                      <p>Open Sans Semi-bold - 48pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={600}>
                        <h2>H2 - Título</h2>
                      </Title>
                      <p>Open Sans Semi-bold - 40pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={600}>
                        <h3>H3 - Título</h3>
                      </Title>
                      <p>Open Sans Semi-bold - 32pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={600}>
                        <h4>H4 - Título</h4>
                      </Title>
                      <p>Open Sans Semi-bold - 24pt</p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={700}>
                        <h1>H1 - Título</h1>
                      </Title>
                      <p>Open Sans Bold - 48pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={700}>
                        <h2>H2 - Título</h2>
                      </Title>
                      <p>Open Sans Bold - 40pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={700}>
                        <h3>H3 - Título</h3>
                      </Title>
                      <p>Open Sans Bold - 32pt</p>
                    </div>
                    <div>
                      <Title fontFamily='Open Sans' fontWeight={700}>
                        <h4>H4 - Título</h4>
                      </Title>
                      <p>Open Sans Bold - 24pt</p>
                    </div>
                  </GridItem>
                </GridContainer>
              </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <Title><h3><small>Parágrafo</small></h3></Title>
              <Text width={'90%'}>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </Text>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <Title>
                <h2>Header with small subtitle <br />
                  <Small>Use {'"Small"'} tag for the headers</Small>
                </h2>
              </Title>
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
