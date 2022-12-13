import { FC, ReactNode } from 'react'

import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import ModalWrapper from '@mui/material/Modal'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '100%',
    padding: '2rem',
    boxShadow: '0px 20px 40px rgba(43, 116, 168, 0.2)',
    background: '#fff',
    borderRadius: '20px',
  },
}))

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  const classes = useStyles()
  return (
    <ModalWrapper
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className={classes.box}>{children}</Box>
    </ModalWrapper>
  )
}

export default Modal
