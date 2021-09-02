import React from "react";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Info from "@material-ui/icons/Info";
// core components
import SnackbarContent from "../../../library/components/Snackbar/SnackbarContent";

import { Section, Container, Title } from './Styles';

export default function SectionAlerts() {
  return (
    <Section id="alerts">
      <Container>
        <Title>
          <h3>Alertas</h3>
        </Title>
      </Container>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        }
        close
        color="info"
        icon={Info}
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="danger"
        icon={Info}
      />
    </Section>
  );
}
