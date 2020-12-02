import React, {forwardRef, useState} from "react";
// @material-ui/core components
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import { useModal } from '../../../components/Modal/Modal';

import { Section, Container, Title, Text } from './Styles';

export default function SectionModal() {
  const { setModal, unSetModal } = useModal();

  const handleModal = () => {
    setModal({
      title: 'Título',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Botão',
    });
  };

  return (
    <Section>
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <Title>
              <h3>Modal</h3>
            </Title>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  onClick={handleModal}
                >
                  <LibraryBooks />
                  Clássico
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Container>
    </Section>
  );
}
