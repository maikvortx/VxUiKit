import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../library/components/Grid/GridContainer";
import GridItem from "../../../library/components/Grid/GridItem";
import CustomTabs from "../../../library/components/CustomTabs/CustomTabs";

import { Section, Container, Title } from './Styles';

const useStyles = makeStyles();

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <Section>
      <Container>
        <div id="nav-tabs">
          <Title>
            <h3>Abas</h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                plainTabs
                headerColor="#f5f5f5"
                tabs={[
                  {
                    tabName: "Aba 1",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Aba 2",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "Aba 3",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
