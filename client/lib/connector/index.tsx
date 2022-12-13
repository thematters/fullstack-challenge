import { InjectedConnector } from './InjectedConnector'
import { WalletConnectConnector } from './WalletConnectConnector'

export enum ConnectorType {
  INJECTED = 'INJECTED',
  WALLET_CONNECT = 'WALLET_CONNECT',
}

export const connector: { [prop in ConnectorType]: any } = {
  [ConnectorType.INJECTED]: new InjectedConnector(),
  [ConnectorType.WALLET_CONNECT]: new WalletConnectConnector(),
}
