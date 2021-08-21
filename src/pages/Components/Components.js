import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "../../library/components/Header/Header";
import Footer from "../../library/components/Footer/Footer";
import GridContainer from "../../library/components/Grid/GridContainer";
import GridItem from "../../library/components/Grid/GridItem";
import Parallax from "../../library/components/Parallax/Parallax";

// sections for this page
// import HeaderLinks from "../../library/components/Header/HeaderLinks";
import SectionColors from "../../library/components/Sections/SectionColors";
import SectionBasics from "../../library/components/Sections/SectionBasics";
import SectionButton from "../../library/components/Sections/SectionButton";
import SectionInputs from "../../library/components/Sections/SectionInputs";
import SectionPagination from "../../library/components/Sections/SectionPagination";
import SectionTabs from "../../library/components/Sections/SectionTabs";
import SectionAlerts from "../../library/components/Sections/SectionAlerts";
import SectionTypography from "../../library/components/Sections/SectionTypography";
import SectionIcons from "../../library/components/Sections/SectionIcons";
import SectionModal from "../../library/components/Sections/SectionModal";
import SectionTooltip from "../../library/components/Sections/SectionTooltip";
import SectionTable from "../../library/components/Sections/SectionTable";
import SectionCard from "../../library/components/Sections/SectionCard";
import SectionIlustrations from "../../library/components/Sections/SectionIlustrations";
import SectionExamples from "../../library/components/Sections/SectionExamples";

import styles from "../../library/material/ui-kit/views/components";
import { Container, Title } from './styles';


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <Header
        brand={"Vórtx"}
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      <Header/>
      <Parallax image={require("../../assets/img/bg4.jpg")}>
        <Container>
          <GridContainer>
            <GridItem>
              <Title>
                <h1 color={'#cb1e25'}>Vórtx UI Kit.</h1>
              </Title>
              <Title>
                <h3>A Badass Material-UI Kit based on Material Design.</h3>
              </Title>
            </GridItem>
          </GridContainer>
        </Container>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionColors />
        <SectionIcons />
        <SectionButton />
        <SectionInputs />
        <SectionBasics />
        <SectionPagination />
        <SectionTabs />
        <SectionAlerts />
        <SectionTypography />
        <SectionModal />
        <SectionTooltip />
        <SectionTable />
        <SectionCard />
        <SectionIlustrations />
        <SectionExamples />
      </div>
      <Footer />
    </div>
  );
}
