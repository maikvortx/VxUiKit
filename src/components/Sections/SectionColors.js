import React from "react";

// core components
import {GridContainer, GridItem} from "@vortx-dtvm/ui-kit-components";
import { primaryColor } from "../../material/ui-kit";
import { Section, Container, Title, Text } from './Styles';
import { Box, Tag } from './SectionColorsStyles';

export default function SectionColors() {
  return (
    <Section id='cores'>
      <Container>
        <Title color={'#525252'}>
          <h2>Elementos básicos</h2>
        </Title>
        <Title>
          <h3>Cores</h3>
        </Title>
        <Title>
          <h3><small>Cores primárias</small></h3>
        </Title>
        <Text width={'inherit'}>As cores principais/primárias da Vórtx são essas, com base na marca (Logo e manual de branding). A ideia é utilizar elas como destaque ou com maior peso em tela, como em botões, divisórias ou destaque.</Text>
        <GridContainer>
          <GridItem xs={4} sm={1}>
            <Box bgColor={primaryColor}/>
            <Tag>#CB1E25</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#C12C2C'}/>
            <Tag>#C12C2C</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#8B0D09'}/>
            <Tag>#8B0D09</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#8E734A'}/>
            <Tag>#8E734A</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#C99846'}/>
            <Tag>#C99846</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#F4F2ED'}/>
            <Tag>#F4F2ED</Tag>
          </GridItem>
          <GridItem xs={4} sm={1}>
            <Box bgColor={'#FFFFFF'}/>
            <Tag>#FFFFFF</Tag>
          </GridItem>
        </GridContainer>
          <Title>
            <h3><small>Cores secundárias</small></h3>
          </Title>
          <Text width={'inherit'}>As cores secundárias são as usadas para apoio em outros elementos em tela, desde os tons de preto, cinza e branco para textos e background de componentes. Fora isso existem as outras cores mais “vivas” usadas para status ou outros elementos de destaque em tela, como gráficos e alertas.</Text>
          <GridContainer>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#C75050'}/>
              <Tag>#C75050</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#E56864'}/>
              <Tag>#E56864</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F7A700'}/>
              <Tag>#F7A700</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#E04A13'}/>
              <Tag>#E04A13</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#86135C'}/>
              <Tag>#86135C</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#B84D80'}/>
              <Tag>#B84D80</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#3D6582'}/>
              <Tag>#3D6582</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#5662B6'}/>
              <Tag>#5662B6</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F7A700'}/>
              <Tag>#F7A700</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#1BAA46'}/>
              <Tag>#1BAA46</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#469639'}/>
              <Tag>#469639</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#225E03'}/>
              <Tag>#225E03</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'##F7F7F7'}/>
              <Tag>##F7F7F7</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F5F5F5'}/>
              <Tag>#F5F5F5</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F0F0F7'}/>
              <Tag>#F0F0F7</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F2F4F9'}/>
              <Tag>#F2F4F9</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#F4F2ED'}/>
              <Tag>#F4F2ED</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#C4C4C4'}/>
              <Tag>#C4C4C4</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#A3A0A0'}/>
              <Tag>#A3A0A0</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#464A4D'}/>
              <Tag>#464A4D</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#525252'}/>
              <Tag>#525252</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#383838'}/>
              <Tag>#383838</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#323232'}/>
              <Tag>#323232</Tag>
            </GridItem>
            <GridItem xs={4} sm={1}>
              <Box bgColor={'#000000'}/>
              <Tag>#000000</Tag>
            </GridItem>
          </GridContainer>
        <GridContainer />
      </Container>
    </Section>
  );
}
