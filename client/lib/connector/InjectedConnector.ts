import Emitter from '@lib/emitter'

export class InjectedConnector {
  private handleChainChanged() {
    window.location.reload()
  }

  private handleAccountsChanged = (accounts: string[]) => {
    Emitter.emit('UPDATE_ACCOUNT', accounts[0])
  }

  async connect() {
    const { ethereum } = window as any

    if (typeof ethereum === 'undefined') {
      throw new Error('Please install MetaMask!')
    }

    if (ethereum.on) {
      ethereum.on('chainChanged', this.handleChainChanged)
      ethereum.on('accountsChanged', this.handleAccountsChanged)
    }

    await ethereum.request({ method: 'eth_requestAccounts' })
  }

  async disconnect() {
    if (window.ethereum && window.ethereum.removeListener) {
      window.ethereum.removeListener('chainChanged', this.handleChainChanged)
      window.ethereum.removeListener('accountsChanged', this.handleAccountsChanged)
    }
  }

  async getProvider() {
    return window.ethereum
  }
}
