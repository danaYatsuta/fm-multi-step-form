import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.config.globalProperties.$formatPriceString = (
      price: number,
      isYearly: boolean,
      prependPlusSign: boolean = false,
    ): string => {
      let result = ''

      if (isYearly) result = `$${price}/yr`
      else result = `$${price}/mo`

      if (prependPlusSign) result = '+' + result

      return result
    }
  },
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatPriceString: (price: number, isYearly: boolean, prependPlusSign?: boolean) => string
  }
}
