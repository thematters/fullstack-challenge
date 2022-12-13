import Emitter from '@lib/emitter'
import WalletConnectProvider from '@walletconnect/web3-provider'

export class WalletConnectConnector {
  walletConnectProvider?: WalletConnectProvider

  private handleConnect() {
    console.log('connect')
  }

  private handleDisconnect(code: number, reason: string) {
    console.log(code, reason)
  }

  private handleChainChanged() {
    window.location.reload()
  }

  private handleAccountsChanged(accounts: string[]) {
    Emitter.emit('UPDATE_ACCOUNT', accounts[0])
  }

  async connect() {
    this.walletConnectProvider = new WalletConnectProvider({
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    })

    this.walletConnectProvider.on('connect', this.handleConnect)
    this.walletConnectProvider.on('disconnect', this.handleDisconnect)
    this.walletConnectProvider.on('chainChanged', this.handleChainChanged)
    this.walletConnectProvider.on('accountsChanged', this.handleAccountsChanged)

    await this.walletConnectProvider.enable()
  }

  async disconnect() {
    if (this.walletConnectProvider) {
      this.walletConnectProvider.removeListener('connect', this.handleConnect)
      this.walletConnectProvider.removeListener('disconnect', this.handleDisconnect)
      this.walletConnectProvider.removeListener('chainChanged', this.handleChainChanged)
      this.walletConnectProvider.removeListener('accountsChanged', this.handleAccountsChanged)
      await this.walletConnectProvider.disconnect()
    }
  }

  async getProvider() {
    return this.walletConnectProvider
  }
}
