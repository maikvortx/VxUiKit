import React, {useState} from "react";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import { useModal } from '../../../components/Modal/Modal';

import { Section, Container, Title, Text } from './Styles';

export default function SectionCard() {
  const { setModal, unSetModal } = useModal();

  const handleModal = () => {
    setModal({
      title: 'Card COM clique',
      subtitle: 'Você clicou no card com clique!',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Botão',
    });
  };

  return (
    <Section bgColor={"#F7F7F7"}>
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} bgColor={"#F7F7F7"}>
            <Card onClick={handleModal}>
              <CardBody>
                <Title>
                  <h3>Card COM clique</h3>
                </Title>
                <Text width={100}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} bgColor={"#F7F7F7"}>
            <Card boxShadow={'unset'}>
              <CardBody>
                <Title>
                  <h3>Card SEM clique</h3>
                </Title>
                <Text width={100}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </Section>
  )
}
