import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material';


export const useIsDesktop = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktop;
}