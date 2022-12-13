import { FC, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { utils } from 'ethers'
import { useWallet } from '@context/wallet'
import { useGasPrice } from '@lib/hooks/useGasPrice'
import { formatAddress, formatCurrency } from '@lib/format'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import WalletModal from './WalletModal'
import AccountModal from './AccountModal'

const Header: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const gasPrice = useGasPrice(10000)

  const { account } = useWallet()
  const [openWallet, setOpenWallet] = useState(false)
  const [openAccount, setOpenAccount] = useState(false)

  const handleOpenWallet = () => setOpenWallet(true)
  const handleCloseWallet = () => setOpenWallet(false)
  const handleOpenAccount = () => setOpenAccount(true)
  const handleCloseAccount = () => setOpenAccount(false)

  const gasGwei = useMemo(() => {
    const gwei = utils.formatUnits(gasPrice || 0, 'gwei')
    return (+gwei).toFixed(2)
  }, [gasPrice])

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link passHref href="/">
            <a>
              <Image priority src="/images/logo.svg" width={160} height={40} alt="matters" />
            </a>
          </Link>
          {matches && (
            <Link passHref href="/status">
              <Typography color="dusk" component="a">
                Status
              </Typography>
            </Link>
          )}
          {matches && (
            <Link passHref href="/docs">
              <Typography color="dusk" component="a">
                Docs
              </Typography>
            </Link>
          )}
        </Stack>
        <Box flexGrow="1"></Box>
        <Stack direction="row" spacing={2} alignItems="center">
          {matches && (
            <Stack direction="row" spacing={0.4} alignItems="flex-end">
              <Typography variant="subtitle2" color="dusk" mb={0.9}>
                Total Value Locked
              </Typography>
              <Typography variant="h6" color="dusk">
                {formatCurrency(30000)}
              </Typography>
            </Stack>
          )}
          {matches && (
            <Typography color="dusk">
              <LocalGasStationIcon />
              {gasGwei}
            </Typography>
          )}
          {account ? (
            <Button variant="contained" color="dusk" onClick={handleOpenAccount}>
              {formatAddress(account)}
            </Button>
          ) : (
            <Button variant="contained" color="dusk" onClick={handleOpenWallet}>
              Connect Wallet
            </Button>
          )}
          <WalletModal open={openWallet} onClose={handleCloseWallet} />
          <AccountModal open={openAccount} onClose={handleCloseAccount} />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
