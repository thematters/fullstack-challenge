import { CSSProperties } from 'react'
import { createTheme } from '@mui/material'
import type { ThemeOptions } from '@mui/material'

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: '#09A6B0',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF5249',
    },
    dusk: {
      main: '#FEFFDA',
      contrastText: '#00949D',
    },
    sky: {
      main: 'rgba(0, 148, 157, 0.1)',
    },
  },
})

export const theme = createTheme(paletteTheme, {
  typography: {
    th: {
      fontSize: '12px',
    },
    money: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 'bold',
      lineHeight: 1,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: 1,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #039FA9',
          padding: '2rem',
          boxShadow: '0px 20px 40px rgba(0, 94, 100, 0.15)',
          borderRadius: '1rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: '80px',
          justifyContent: 'center',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 'fit-content',
          height: '40px',
          boxShadow: 'none',
          borderRadius: '.5rem',
          ':hover': {
            boxShadow: 'none',
          },
          ':disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: paletteTheme.palette.primary.main,
        },
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: 'head' },
          style: { borderBottom: 'none', backgroundColor: '#F6FCFC' },
        },
      ],
      styleOverrides: {
        root: {
          padding: '.5rem',
          fontWeight: 'bold',
          borderBottom: '1px solid #A8E1E4',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { color: 'dusk' },
          style: {
            color: paletteTheme.palette.dusk.main,
          },
        },
      ],
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            background: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '44px',
          borderRadius: '.5rem',
        },
      },
    },
  },
} as ThemeOptions)

/* -------------------------------------------------------------------------- */
/*                                palette                                     */
/* -------------------------------------------------------------------------- */

declare module '@mui/material/styles' {
  interface Palette {
    dusk: Palette['primary']
    sky: Palette['primary']
  }

  interface PaletteOptions {
    dusk?: PaletteOptions['primary']
    sky?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dusk: true
    sky: true
  }
}

/* -------------------------------------------------------------------------- */
/*                                typography                                  */
/* -------------------------------------------------------------------------- */

declare module '@mui/material/styles' {
  interface TypographyVariants {
    th: CSSProperties
    title: CSSProperties
    money: CSSProperties
  }

  interface TypographyVariantsOptions {
    th?: CSSProperties
    title?: CSSProperties
    money?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    th: true
    title: true
    money: true
  }
}
