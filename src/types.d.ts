interface Option {
  id: number
  name: string
  priceMonthly: number
  priceYearly: number
}

export interface Plan extends Option {
  icon: string
}

export interface Addon extends Option {
  description: string
}

export interface Form {
  name: string
  email: string
  phoneNumber: string
  isYearly: boolean
  plan: Plan
  addons: Addon[]
}

export interface FormErrors {
  name?: string
  email?: string
  phoneNumber?: string
}
