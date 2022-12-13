import { FC } from 'react'

import { useWallet } from '@context/wallet'
import { ConnectorType } from '@lib/connector'

import { makeStyles } from '@mui/styles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@components/Modal'
import IconImage from './IconImage'

interface WalletModalProps {
  open: boolean
  onClose: () => void
}

const useStyles = makeStyles(() => ({
  imgWrapper: {
    width: '150px',
    height: '130px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #00949D',
    borderRadius: '10px',
  },
}))

const WalletModal: FC<WalletModalProps> = ({ open, onClose }) => {
  const classes = useStyles()
  const { connect } = useWallet()

  const handleMetamask = () => {
    connect(ConnectorType.INJECTED)
    onClose()
  }

  const handleWalletConnect = () => {
    connect(ConnectorType.WALLET_CONNECT)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Typography variant="subtitle1" color="primary">
        Select Wallet
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
        <section className={classes.imgWrapper} onClick={handleMetamask}>
          <IconImage src="/images/metamask.svg" size={70} />
          <Typography color="primary">Metamask</Typography>
        </section>
        <section className={classes.imgWrapper} onClick={handleWalletConnect}>
          <IconImage src="/images/walletConnect.svg" size={70} />
          <Typography color="primary">WalletConnect</Typography>
        </section>
      </Stack>
    </Modal>
  )
}

export default WalletModal
