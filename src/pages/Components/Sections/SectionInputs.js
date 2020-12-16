import React from "react";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import {Error, Search} from "@material-ui/icons";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Input from "../../../components/Input/Input";

import { Section, Container, Title } from './Styles';
import Dropdown from "../../../components/Dropdown/Dropdown";
import DatePicker from "../../../components/DatePicker/DatePickers";


export default function SectionInputs() {
  return (
    <Section>
      <Container>
        <div id="inputs">
          <Title>
            <h3>Inputs</h3>
          </Title>
          <Title>
            <h3><small>Formulário</small></h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                id="regular"
                labelText="Regular"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                value="Erro"
                id="error"
                error
                helperText="*Mensagem de erro."
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Error />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                labelText="Desabilitado"
                id="desabilitado"
                disabled
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h5>Label</h5>
              <Input
                placeholder="Pesquisar"
                id="input-pesquisar"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
          <Title>
            <h3><small>Filtro</small></h3>
          </Title>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
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
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="Filtro"
                labelText="Filtro"
                variant="outlined"
                inputProps={{
                  placeholder: "Filtro"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="regular"
                labelText="Regular"
                variant="outlined"
                checkbox
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Dropdown
                id="regular"
                labelText="Regular"
                variant="outlined"
                disabled
                inputProps={{
                  placeholder: "Regular"
                }}
                fullWidth
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
