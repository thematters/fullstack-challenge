import { FC } from 'react'

import { useWallet } from '@context/wallet'
import { formatAddress } from '@lib/format'

import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@components/Modal'
import IconImage from './IconImage'
import { useCopyText } from '@lib/hooks/useCopyText'

interface AccountModalProps {
  open: boolean
  onClose: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  textButton: {
    display: 'flex',
    alignItems: 'center',
    width: '180px',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    height: '14px',
    fontSize: '14px',
  },
}))

const AccountModal: FC<AccountModalProps> = ({ open, onClose }) => {
  const classes = useStyles()
  const { account, disconnect } = useWallet()
  const copyText = useCopyText()

  const handleDisconnect = () => {
    disconnect()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Typography variant="subtitle1" color="primary">
        Account
      </Typography>
      <Typography variant="subtitle2">Connected with Metamask</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Button variant="contained" color="sky" style={{ width: '100%' }}>
          {formatAddress(account)}
        </Button>
        <Button variant="outlined" onClick={handleDisconnect} style={{ width: '100%' }}>
          DISCONNECT
        </Button>
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <section className={classes.textButton} onClick={() => (account ? copyText(account) : {})}>
          <IconImage src="/images/copy.svg" size={15} />
          Copy Address
        </section>
        <section className={classes.textButton}>
          <a href={account ? `https://etherscan.io/address/${account}` : ''} target="_blank">
            <IconImage src="/images/link.svg" size={15} />
            View on Etherscan
          </a>
        </section>
      </Stack>
    </Modal>
  )
}

export default AccountModal
