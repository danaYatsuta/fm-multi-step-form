export type Plan = 'arcade' | 'advanced' | 'pro'

export type Addon = 'online_service' | 'larger_storage' | 'customizable_profile'

export interface Form {
  name: string
  email: string
  phoneNumber: string
  plan: Plan
  isYearly: boolean
  addons: Addon[]
}

export interface FormErrors {
  name?: string
  email?: string
  phoneNumber?: string
}
