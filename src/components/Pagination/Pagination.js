import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {usePagination} from '@material-ui/lab/Pagination';

import styles from "./paginationStyle";

const useStyles = makeStyles(styles);

export default function CustomPagination(props) {
  const classes = useStyles();
  const { color, pageCount } = props;
  const { items } = usePagination({
    count: pageCount,
  });

  return (
      <ul className={classes.pagination}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          const paginationLink = classNames({
            [classes.paginationLink]: true,
            [classes[color]]: selected,
            [classes.disabled]: index.disabled
          });

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <Button style={{ fontWeight: selected ? 'bold' : undefined }} className={paginationLink} {...item} variant="outlined" shape="rounded">
                {page}
              </Button>
            );
          } else {
            children = (
              <Button {...item} className={paginationLink} variant="outlined" shape="rounded">
                {type === "next" ? '>' : type === "previous" ? '<' : null}
              </Button>
            );
          }

          return <li key={index} className={classes.paginationItem}>{children}</li>;
        })}
      </ul>
  );
}

CustomPagination.defaultProps = {
  color: "primary"
};

CustomPagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["<", ">", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};
