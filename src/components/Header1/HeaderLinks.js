/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useModal } from '../../components/Modal/Modal';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "../../components/CustomButtons/Button";

import styles from "./headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { setModal, unSetModal } = useModal();
  
  const handleLogout = () => {
    setModal({
      title: 'Clique no logout',
      subtitle: 'Você clicou no "SAIR" do header!',
      body: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind',
      button: 'Fechar',
    });
  };
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <p className={classes.login}>Usuário</p>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={handleLogout}
          color="transparent"
          target="_blank"
          className={classes.logout}
        >
          (Sair)
        </Button>
      </ListItem>
    </List>
  );
}
