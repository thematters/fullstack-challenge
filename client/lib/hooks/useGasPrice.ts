import { useRef } from 'react'
import useSWR from 'swr'
import { useWallet } from '@context/wallet'

export const useGasPrice = (refreshInterval?: number) => {
  const { provider } = useWallet()

  const providerRef = useRef(provider)
  providerRef.current = provider

  const { data } = useSWR('/gasPrice', () => providerRef.current.getGasPrice(), { refreshInterval })

  return data
}
