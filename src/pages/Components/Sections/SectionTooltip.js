import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/Buttons/Button";

import styles from "./SectionTooltipsStyle";
import { Section, Container, Title } from './Styles';

const useStyles = makeStyles(styles);

export default function SectionTooltip() {
  const classes = useStyles();
  return (
    <Section id="tooltip">
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Title>
              <h3>Tooltip</h3>
            </Title>
            <Tooltip
              id="tooltip-top"
              title="Tooltip on top"
              placement="top"
              arrow
              classes={classes}
            >
              <Button>On top</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-bottom"
              title="Tooltip on bottom"
              placement="bottom"
              arrow
              classes={classes}
            >
              <Button>On bottom</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-right"
              title="Tooltip on right"
              placement="right"
              arrow
              classes={classes}
            >
              <Button>On right</Button>
            </Tooltip>
            <Tooltip
              id="tooltip-left"
              title="Tooltip on left"
              placement="left"
              arrow
              classes={classes}
            >
              <Button>On left</Button>
            </Tooltip>
          </GridItem>
        </GridContainer>
      </Container>
    </Section>
  );
}
