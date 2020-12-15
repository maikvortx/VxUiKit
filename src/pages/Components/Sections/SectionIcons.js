import React from "react";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import DatePicker from "../../../components/CustomDatePicker/CustomDatePicker";

// icons components
import {
  AccessAlarmRounded,
  GetAppRounded,
  AddRounded,
  AddCircleRounded,
  AddAlertRounded,
  DoneRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  ArrowLeftRounded,
  ArrowRightRounded,
  ArrowDropDownRounded,
  ArrowDropUpRounded,
  ArrowDropDownCircleRounded,
  FirstPageRounded,
  LastPageRounded,
  UnfoldLessRounded,
  UnfoldMoreRounded,
  SubdirectoryArrowLeftRounded,
  SubdirectoryArrowRightRounded,
  CloseRounded,
  FullscreenRounded,
  FullscreenExitRounded,
  MoreHorizRounded,
  MoreVertRounded,
  CloudRounded,
  CloudQueueRounded,
  FolderSharedRounded,
  FolderOpenRounded,
  CheckRounded,
  DoneAllRounded,
  DoneOutlineRounded,
  CheckCircleRounded,
  OfflinePinRounded,
  ShoppingCartRounded,
  LibraryAddCheckRounded,
  PlaylistAddRounded,
  PlaylistAddCheckRounded,
  AddBoxRounded,
  AddToPhotosRounded,
  ErrorRounded,
  ErrorOutlineRounded,
  WarningRounded,
  NotificationImportantRounded,
  FileCopyRounded,
  DescriptionRounded,
  InsertDriveFileRounded,
  AttachmentRounded,
  BackupRounded,
  CloudDoneRounded,
  CloudOffRounded,
  FolderRounded,
  CreateNewFolderRounded,
  ArrowBackRounded,
  ArrowDownwardRounded,
  ArrowForwardRounded,
  ArrowUpwardRounded,
  MenuRounded,
  AppsRounded,
  CloudDownloadRounded,
  CloudCircleRounded  
} from '@material-ui/icons';

import { Section, Container, Title, Text } from './Styles';
import { Card } from "@material-ui/core";

export default function SectionTypography() {
  return (
    <Section>
      <Container>
        <div id="icons">
          <Title><h3>Ícones</h3></Title>
          <GridContainer>
            <GridItem xs={12} sm={5}>
              <Text>
                A ideia é utilizar da biblioteca inteira do ‘Material Design’, no caso os icones são na versão “rounded”. Podem ser utilizados como representação visual de algo e até como icones/botões de ações. As divisões trazidas aqui são as mais usadas do Material Design (Nem todas foram usadas dentro dos produtos da Vórtx), para ver a lista completa só ir na própria biblioteca:
              </Text>
              <a href="https://material-ui.com/pt/components/icons/" target="_blank" rel="noreferrer">
                <Button color="primary" size="lg" simple>
                  Ver mais ícones >
                </Button>
              </a>
              </GridItem>
              <GridItem xs={12} sm={7}>
                <GridContainer>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3><small>Ações</small></h3>
                    </Title>
                    <AccessAlarmRounded/>
                    <GetAppRounded/>
                    <AddRounded/>
                    <AddCircleRounded/>
                    <AddBoxRounded/>
                    <DoneRounded/> 
                    <CheckRounded/> 
                    <DoneAllRounded/>
                    <DoneOutlineRounded/>
                    <CheckCircleRounded/>
                    <OfflinePinRounded/>
                    <ShoppingCartRounded/>
                    <LibraryAddCheckRounded/>
                    <PlaylistAddRounded/>
                    <PlaylistAddCheckRounded/>
                    <AddToPhotosRounded/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3><small>Navegação</small></h3>
                    </Title>
                    <ArrowBackRounded/>
                    <ArrowDownwardRounded/>
                    <ArrowForwardRounded/>
                    <ArrowUpwardRounded/>
                    <ChevronLeftRounded/>
                    <ChevronRightRounded/>
                    <ExpandLessRounded/>
                    <ExpandMoreRounded/>
                    <ArrowLeftRounded/>
                    <ArrowRightRounded/>
                    <ArrowDropUpRounded/>
                    <ArrowDropDownRounded/>
                    <ArrowDropDownCircleRounded/>
                    <FirstPageRounded/>
                    <LastPageRounded/>
                    <UnfoldLessRounded/>
                    <UnfoldMoreRounded/>
                    <SubdirectoryArrowLeftRounded/>
                    <SubdirectoryArrowRightRounded/>
                    <CloseRounded/>
                    <FullscreenExitRounded/>
                    <FullscreenRounded/>
                    <MoreHorizRounded/>
                    <MoreVertRounded/>
                    <MenuRounded/>
                    <AppsRounded/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3><small>Arquivos</small></h3>
                    </Title>
                    <CloudRounded/>
                    <CloudQueueRounded/>
                    <CloudDownloadRounded/>
                    <CloudDoneRounded/>
                    <CloudOffRounded/>
                    <CloudCircleRounded/>
                    <FileCopyRounded/>
                    <DescriptionRounded/>
                    <InsertDriveFileRounded/>
                    <AttachmentRounded/>
                    <BackupRounded/>
                    <FolderRounded/>
                    <FolderSharedRounded/>
                    <FolderOpenRounded/>
                    <CreateNewFolderRounded/>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <Title>
                      <h3><small>Alertas</small></h3>
                    </Title>
                    <WarningRounded/>
                    <ErrorRounded/>
                    <ErrorOutlineRounded/>
                    <AddAlertRounded/>
                    <NotificationImportantRounded/>
                  </GridItem>
                </GridContainer>
              </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <Title>
                <h3><small>Exemplos de utilização</small></h3>
              </Title>
              <Text>
                Usar em botões e campos para ilustrar a ação que o mesmo faz. Exemplo:
              </Text>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Text>
                Usar em botões e campos para ilustrar a ação que o mesmo faz. Exemplo:
              </Text>
              <DatePicker
                id="regular"
                labelText="Regular"
                variant="outlined"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
              <Button color="primary">
                <GetAppRounded/> Com ícone
              </Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Text>
              Exemplo em cards (VxInforma). Exemplo:
              </Text>
              <Card/>
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
