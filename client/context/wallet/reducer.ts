import { getDefaultProvider, providers } from 'ethers'

interface State {
  provider: providers.BaseProvider
  signer?: providers.JsonRpcSigner
  wallet?: any
  account?: string
  errorMessage?: string
}

interface Action {
  type: 'CONNECT' | 'DISCONNECT' | 'UPDATE_ACCOUNT'
  payload?: any
}

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action
  switch (type) {
    case 'CONNECT':
      return {
        ...state,
        wallet: payload.wallet,
        signer: payload.signer,
        account: payload.account,
        provider: payload.provider,
      }
    case 'DISCONNECT':
      return {
        ...state,
        signer: undefined,
        account: undefined,
        provider: getDefaultProvider(),
        errorMessage: payload?.errorMessage,
      }
    case 'UPDATE_ACCOUNT':
      return { ...state, account: payload.account }
    default:
      return { ...state }
  }
}
