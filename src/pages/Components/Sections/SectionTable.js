import React from "react";

import { Section, Container, Title } from './Styles';
import CustomTable from "../../../components/CustomTable/CustomTable";

export default function SectionTable() {
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
