import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './globalStyle';
import theme from './MuiTheme';

const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </MuiThemeProvider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default ThemeProvider