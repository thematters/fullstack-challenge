import { createContext, FC, useContext, useReducer, useState } from 'react'

import { networkUrl } from '@configs/network'
import Emitter from '@lib/emitter'
import { reducer } from './reducer'
import { connector, ConnectorType } from '@lib/connector'
import { getDefaultProvider, providers } from 'ethers'

// import Snackbar from '@mui/material/Snackbar'

interface ProviderProps {
  provider: providers.BaseProvider
  signer?: providers.JsonRpcSigner
  wallet?: any
  account?: string
  errorMessage?: string
  connect: (type: ConnectorType) => void
  disconnect: () => void
}

const WalletContext = createContext({} as ProviderProps)

export const useWallet = (): ProviderProps => useContext(WalletContext)

export const WalletProvider: FC = ({ children }) => {
  const initialState = { provider: getDefaultProvider(networkUrl) }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [open, setOpen] = useState(false)

  const connect = async (connectorType: ConnectorType) => {
    try {
      // connect wallet
      const wallet = connector[connectorType]
      await wallet.connect()

      // get provider
      const provider = await wallet.getProvider()

      if (!provider) throw Error('Provider undefined')
      const web3Provider = new providers.Web3Provider(provider)

      // get info
      const signer = web3Provider.getSigner()

      const account = await signer.getAddress()
      dispatch({ type: 'CONNECT', payload: { wallet, signer, account, provider: web3Provider } })
    } catch (err: any) {
      setOpen(true)
      dispatch({ type: 'DISCONNECT', payload: { errorMessage: err.message } })
    }
  }

  const disconnect = async () => {
    await state.wallet.disconnect()
    dispatch({ type: 'DISCONNECT' })
  }

  Emitter.on('UPDATE_ACCOUNT', (val: any) =>
    dispatch({ type: 'UPDATE_ACCOUNT', payload: { account: val } }),
  )

  return (
    <WalletContext.Provider
      value={{
        signer: state.signer,
        account: state.account,
        provider: state.provider!, // TODO: remove exclamation mark
        errorMessage: state.errorMessage,
        connect,
        disconnect,
      }}
    >
      {children}
      {/* <Snackbar
        open={open}
        message={state.errorMessage}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
      /> */}
    </WalletContext.Provider>
  )
}
