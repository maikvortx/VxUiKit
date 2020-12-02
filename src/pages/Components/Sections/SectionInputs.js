import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Error from "@material-ui/icons/Error";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";

import styles from "../../../assets/jss/ui-kit/views/componentsSections/basicsStyle";
import { Section, Container, Title, Subtitle } from './Styles';
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomDatePicker from "../../../components/CustomDatePicker/CustomDatePicker";

const useStyles = makeStyles(styles);

export default function SectionInputs() {
  const classes = useStyles();
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
              <CustomInput
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
              <CustomInput
                labelText="Sucesso"
                id="success"
                success
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Erro"
                id="error"
                error
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
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
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
              <CustomDatePicker
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
              <CustomDropdown
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
              <CustomDropdown
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
              <CustomDropdown
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
          </GridContainer>
        </div>
      </Container>
    </Section>
  );
}
