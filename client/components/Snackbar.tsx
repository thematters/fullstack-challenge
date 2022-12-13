import { createContext, FC, useState } from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'
import { useIsDesktop } from '@lib/hooks/useIsDesktop'

type RenderSnackProps = {
  message: string
  open: boolean
  severity: AlertColor
  onClose: VoidFunction
}

function RenderSnack({ message, open, severity, onClose }: RenderSnackProps) {
  const isDesktop = useIsDesktop()

  const anchor = isDesktop
    ? ({
        vertical: 'top',
        horizontal: 'right',
      } as const)
    : ({
        vertical: 'top',
        horizontal: 'center',
      } as const)

  return (
    <Snackbar anchorOrigin={anchor} open={open} onClose={onClose} autoHideDuration={3000}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  )
}

// Snackbar default values
export const defaultInterval = 250

// Context used by the hook useSnackbar() and HoC withSnackbar()
type SnackbarContextType = {
  openSnackbar: (_text: string, _severity: AlertColor) => void
}
export const SnackbarContext = createContext<SnackbarContextType>({
  openSnackbar: (_text, _severity) => {},
})

export const SnackbarProvider: FC = ({ children }) => {
  // Current open state
  const [open, setOpen] = useState(false)
  // Snackbar's text
  const [text, setText] = useState<string>('')

  const [severity, setSeverity] = useState<AlertColor>('success')

  const triggerSnackbar = (_text: string, _severity: AlertColor) => {
    setText(_text)
    setOpen(true)
    setSeverity(_severity)
  }

  // Manages all the snackbar's opening process
  const openSnackbar = (_text: string, _severity: AlertColor) => {
    // Closes the snackbar if it is already open
    if (open === true) {
      setOpen(false)
      setTimeout(() => {
        triggerSnackbar(_text, _severity)
      }, defaultInterval)
    } else {
      triggerSnackbar(_text, _severity)
    }
  }

  const closeSnackbar = () => {
    setOpen(false)
  }

  // Returns the Provider that must wrap the application
  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <RenderSnack severity={severity} message={text} open={open} onClose={closeSnackbar} />
      {/* Renders Snackbar on the end of the page */}
    </SnackbarContext.Provider>
  )
}
