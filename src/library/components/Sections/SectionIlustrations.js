import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { ArrowRightRounded } from '@material-ui/icons';
// core components
import GridContainer from "../../../library/components/Grid/GridContainer";
import GridItem from "../../../library/components/Grid/GridItem";
import Button from "../../../library/components/Buttons/Button";

import ExemploIlustracao from "../../../assets/img/ex-ilustracao.png";
import Stories from "../../../assets/img/stories.png";

import styles from "../../assets/ui-kit/views/componentsSections/exampleStyle";
import { Section, Container, Title, Text } from './Styles';

const useStyles = makeStyles(styles);

export default function SectionIlustrations() {
  const classes = useStyles();
  return (
    <Section id='illustrations'>
      <Container>
        <Title>
          <h2>Ilustrações</h2>
        </Title>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Title>
              <h3>Conceito/Ideia</h3>
            </Title>
            <Text width='inherit'>A utilização de ilustrações é algo mais recente nas interfaces, mas a ideia é que seja mais recorrente. As ilustrações são usadas para atribuir um signifcado lúdico a alguma ação do usuário externo (Clientes) no sistema, fazendo assim que o processo fique mais “leve”. Fora isso a utilização delas em outras peças, como e-mails automáticos dos sistemas, fazendo com que chame mais a atenção do usuário ao conteúdo do mesmo.</Text>
              <img
                src={ExemploIlustracao}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Title>
              <h3>Banco de ilustrações</h3>
            </Title>
            <Text width='inherit'>As ilustrações usadas são de um banco gratuito até pra uso comercial, disponibilizado pela  “Stories”. Com diversas ilustrações com o intuito de servir para ilustrar interfaces e peças digitais, na mesma existem diversos estilos, mas o atualmente usado é o “Bro”.</Text>
            <a href="https://stories.freepik.com/how-it-works" target="_blank" rel="noreferrer">
              <img
                src={Stories}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="primary" size="lg" simple>
                Stories - by Freepik <ArrowRightRounded/>
              </Button>
            </a>
          </GridItem>
        </GridContainer>
      </Container>
    </Section>
  );
}
