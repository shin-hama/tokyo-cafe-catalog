import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark'
    },
    typography: {
      fontSize: 14,
      fontFamily: ['Noto Sans', 'Noto Sans JP', 'Roboto', 'sans-serif'].join(
        ', '
      ),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      fontWeightBold: 900,

      h1: {
        fontSize: 40,
        fontWeight: 900
      },
      h2: { fontSize: 32, fontWeight: 700 },
      h3: { fontSize: 28 },
      h4: { fontSize: 24 },
      h5: { fontSize: 20 },
      h6: { fontSize: 18 },
      subtitle1: { fontSize: 18 },
      body1: { fontSize: 16 },
      button: { textTransform: 'none' }
    }
  })
)
