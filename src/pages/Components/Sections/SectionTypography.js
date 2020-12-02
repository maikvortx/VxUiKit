import React from "react";
// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Small from "../../../components/Typography/Small";

import styles from "../../../components/Typography/typographyStyle";
import { Section, Container, Title, Text } from './Styles';

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  return (
    <Section>
      <Container>
        <div id="typography">
          <Title><h3>Tipografia</h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={5}>
              <Title>
                <h3><span color={"#cb1e25"}>Josefin Sans</span> - Font Family</h3>
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
                <Title>
                  <h3 fontFamily='Open Sans'><span color="#cb1e25">Open Sans</span> - Font Family</h3>
                </Title>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <h1 fontFamily={"Open Sans"}>H1 - Título</h1>
                      <p>Open Sans - 48pt</p>
                    </div>
                    <div>
                      <h2 fontFamily={"Open Sans"}>H2 - Título</h2>
                      <p>Open Sans - 40pt</p>
                    </div>
                    <div>
                      <h3 fontFamily="Open Sans">H3 - Título</h3>
                      <p>Open Sans - 32pt</p>
                    </div>
                    <div>
                      <h4 fontFamily="Open Sans">H4 - Título</h4>
                      <p>Open Sans - 24pt</p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <h1 fontWeight={600} fontFamily={"Open Sans"}>H1 - Título</h1>
                      <p>Open Sans Semi-bold - 48pt</p>
                    </div>
                    <div>
                      <h2 fontWeight={600} fontFamily={"Open Sans"}>H2 - Título</h2>
                      <p>Open Sans Semi-bold - 40pt</p>
                    </div>
                    <div>
                      <h3 fontWeight={600} fontFamily={"Open Sans"}>H3 - Título</h3>
                      <p>Open Sans Semi-bold - 32pt</p>
                    </div>
                    <div>
                      <h4 fontWeight={600} fontFamily={"Open Sans"}>H4 - Título</h4>
                      <p>Open Sans Semi-bold - 24pt</p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <div>
                      <h1 fontWeight={700} fontFamily={"Open Sans"}>H1 - Título</h1>
                      <p>Open Sans Bold - 48pt</p>
                    </div>
                    <div>
                      <h2 fontWeight={700} fontFamily={"Open Sans"}>H2 - Título</h2>
                      <p>Open Sans Bold - 40pt</p>
                    </div>
                    <div>
                      <h3 fontWeight={700} fontFamily={"Open Sans"}>H3 - Título</h3>
                      <p>Open Sans Bold - 32pt</p>
                    </div>
                    <div>
                      <h4 fontWeight={700} fontFamily={"Open Sans"}>H4 - Título</h4>
                      <p>Open Sans Bold - 24pt</p>
                    </div>
                  </GridItem>
                </GridContainer>
              </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12}>
              <Title>
                <h3><span color={"#cb1e25"}>Baton Turbo</span> - Font Family (exceção)</h3>
              </Title>
              <GridContainer>
                <GridItem xs={12} sm={3}>
                  <Text width={'100%'}>Um caso excepcional é a Baton Turbo, que era utilizada nos sistemas de corporate. Foi feita uma atualização do VxInforma para o novo estilo visual, porém ainda se manteve a Baton turbo, mas a idéia é que no futuro não tenha mais essa diferença e tudo fique em Josefin e Open Sans.</Text>
                </GridItem>
                <GridItem xs={12} sm={3}>
                  <Title>
                    <h1 fontFamily={"Baton Turbo"}>H1 -Título</h1>
                    <p>Baton Turbo Regular - 48pt</p>
                  </Title>
                  <Title >
                    <h2 fontFamily={"Baton Turbo"}>H2 -Título</h2>
                    <p>Baton Turbo Regular - 40pt</p>
                  </Title>
                  <Title>
                    <h3 fontFamily={"Baton Turbo"}>H3 -Título</h3>
                    <p>Baton Turbo Regular - 32pt</p>
                  </Title>
                  <Title>
                    <h4 fontFamily={"Baton Turbo"}>H4 -Título</h4>
                    <p>Baton Turbo Regular - 24pt</p>
                  </Title>
                </GridItem>
                <GridItem xs={12} sm={3}>
                  <div>
                    <h1 fontWeight={700} fontFamily={"Baton Turbo"}>H1 -Título</h1>
                    <p>Baton Turbo Bold - 48pt</p>
                  </div>
                  <div>
                    <h2 fontWeight={700} fontFamily={"Baton Turbo"}>H2 -Título</h2>
                    <p>Baton Turbo Bold - 40pt</p>
                  </div>
                  <div>
                    <h3 fontWeight={700} fontFamily={"Baton Turbo"}>H3 -Título</h3>
                    <p>Baton Turbo Bold - 32pt</p>
                  </div>
                  <div>
                    <h4 fontWeight={700} fontFamily={"Baton Turbo"}>H4 -Título</h4>
                    <p>Baton Turbo Bold - 24pt</p>
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
