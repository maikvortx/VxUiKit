import {
  createMuiTheme,
} from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: ['Open Sans'].join(','),
    },
    palette: {
      primary: {
        light: '#D07676',
        main: '#CB1E25',
        dark: '#A20B0B',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#EEEDEA',
        main: '#F4F2ED',
        dark: '#EAE4D8',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          whiteSpace: 'normal',
        },
      },
      MuiButton: {
        root: {
          textTransform: 'inherit',
          borderRadius: 7,
          padding: '10px 20px',
          maxHeight: '50px',
          minHeight: '40px',
          fontFamily: 'Josefin Sans',
          fontSize: '1rem',
        },
        outlinedPrimary: {
          border: '3px solid #C12C2C',
          "&:hover": {
            border: '3px solid #C12C2C',
            backgroundColor: '#C12C2C',
          }
        }
      },
      MuiIconButton: {
        root: {
          ':hover': {
            backgroundColor: 'unset',
            color: '#000000',
          },
        },
      },
      MuiListItem: {
        button: {
          '&:hover': {
            backgroundColor: "#F3D5D5",
          },
        },
      },
      MuiMobileStepper: {
        root: {
          background: 'unset',
        },
      },
      MuiTabs: {
        root: {
          backgroundColor: "#F5F5F5",
        }
      },
      MuiTable: {
        root: {
          borderCollapse: "unset",
          borderSpacing: "0 5px",
        }
      },
      MuiTableCell: {
        root: {
          border: 'none',
        },
        head: {
          fontFamily: "'Josefin Sans', sans-serif",
          border: 'none',
        },
        body: {
          fontFamily: "'Open Sans', sans-serif",
          border: 'none',
        },
        stickyHeader: {
          backgroundColor: "#ffffff",
        }
      },
      MuiTableRow: {
        root: {
          backgroundColor: "#f7f7f7",
          marginBottom: "5px",
          '&:hover': {
            boxShadow: "6px 6px 8px 0px rgba(52,52,52,0.17)",
            cursor: "pointer",
          }
        },
        head: {
          textTransform: "capitalize",
          backgroundColor: "#ffffff",
          border: "none",
          '&:hover': {
            boxShadow: 'none;'
          }
        },
        footer: {
          backgroundColor: "#ffffff",
          border: "none",
          '&:hover': {
            boxShadow: 'none;'
          }
        }
      }
    },
  },
  ptBR
);

export default theme;
