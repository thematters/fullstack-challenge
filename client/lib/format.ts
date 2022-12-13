const locales = ['en-US']

export const decimalFormatter = new Intl.NumberFormat(locales, {
  style: 'decimal',
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 4,
})

export const currencyFormatter = new Intl.NumberFormat(locales, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const numberFormatter = new Intl.NumberFormat(locales, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatAddress = (value?: string) => {
  return value ? `${value.slice(0, 6)}...${value.slice(-4)}` : ''
}

export const formatDecimal = (value: number) => {
  return decimalFormatter.format(value)
}

export const formatCurrency = (value: number) => {
  return currencyFormatter.format(value)
}

export const formatCurrencyWithouSymbol = (value: number) => numberFormatter.format(value)
