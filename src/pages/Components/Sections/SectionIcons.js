import React from "react";
// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
// icons components
import { AccessAlarm, Add, AddCircle, AddBox, AddToPhotos, Error, Help, Warning, Info, NotificationImportant, FileCopy, Description, InsertDriveFile, Attachment, Backup, CloudDone, CloudOff, Folder, CreateNewFolder, ArrowBack,ArrowDownward, ArrowForward,ArrowUpward, Menu, Apps   } from '@material-ui/icons';

import styles from "../../../components/Typography/typographyStyle";
import { Section, Container, Title, Text } from './Styles';

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  return (
    <Section>
      <Container>
        <div id="typography">
          <Title><h3>Ícones</h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={5}>
              <Text>
                A ideia é utilizar da biblioteca inteira do ‘Material Design’, no caso os icones são na versão “rounded”. Podem ser utilizados como representação visual de algo e até como icones/botões de ações. As divisões trazidas aqui são as mais usadas do Material Design (Nem todas foram usadas dentro dos produtos da Vórtx), para ver a lista completa só ir na própria biblioteca:
              </Text>
              <a href="https://material-ui.com/pt/components/icons/" target="_blank">
                <Button color="primary" size="lg" simple>
                  Ver mais ícones >
                </Button>
              </a>
              </GridItem>
              <GridItem xs={12} sm={7}>
                <GridContainer>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3>Ações</h3>
                    </Title>
                    <AccessAlarm/>
                    <Add/>
                    <AddCircle/>
                    <AddBox/>
                    <AddToPhotos/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3>Navegação</h3>
                    </Title>
                    <ArrowBack/>
                    <ArrowDownward/>
                    <ArrowForward/>
                    <ArrowUpward/>
                    <Menu/>
                    <Apps/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3>Arquivos</h3>
                    </Title>
                    <FileCopy/>
                    <Description/>
                    <InsertDriveFile/>
                    <Attachment/>
                    <Backup/>
                    <CloudDone/>
                    <CloudOff/>
                    <Folder/>
                    <CreateNewFolder/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3>Alertas</h3>
                    </Title>
                    <Error/>
                    <Help/>
                    <Warning/>
                    <Info/>
                    <NotificationImportant/>
                  </GridItem>
                </GridContainer>
              </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
