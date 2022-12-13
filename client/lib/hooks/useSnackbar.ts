

import { AlertColor } from '@mui/material'
import { useContext } from 'react'
import { SnackbarContext } from '@components/Snackbar'

// Custom hook to trigger the snackbar on function components
export const useSnackbar = (severity: AlertColor = 'success') => {
  const { openSnackbar } = useContext(SnackbarContext)

  function open(text = '') {
    openSnackbar(text, severity)
  }

  return open
}
