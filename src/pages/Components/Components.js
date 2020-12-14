import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
// import Header from "../../components/Header/Header";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";

// sections for this page
// import HeaderLinks from "../../components/Header/HeaderLinks";
import SectionColors from "./Sections/SectionColors";
import SectionBasics from "./Sections/SectionBasics";
import SectionButton from "./Sections/SectionButton";
import SectionInputs from "./Sections/SectionInputs";
import SectionPagination from "./Sections/SectionPagination";
import SectionTabs from "./Sections/SectionTabs";
import SectionNotifications from "./Sections/SectionNotifications";
import SectionTypography from "./Sections/SectionTypography";
import SectionIcons from "./Sections/SectionIcons";
import SectionModal from "./Sections/SectionModal";
import SectionTooltip from "./Sections/SectionTooltip";
import SectionTable from "./Sections/SectionTable";
import SectionCard from "./Sections/SectionCard";
import SectionIlustrations from "./Sections/SectionIlustrations";
import SectionExamples from "./Sections/SectionExamples";

import styles from "../../assets/jss/ui-kit/views/components";
import { Section, Container, Title } from './styles';


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
        <SectionNotifications />
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