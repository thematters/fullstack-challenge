import { InjectedConnector } from './InjectedConnector'
import { WalletConnectConnector } from './WalletConnectConnector'

export enum ConnectorType {
  INJECTED = 'INJECTED',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export const connector = {
  [ConnectorType.INJECTED]: new InjectedConnector(),
  [ConnectorType.WALLET_CONNECT]: new WalletConnectConnector(),
}
