export type Plan = 'arcade' | 'advanced' | 'pro'

export interface Form {
  name: string
  email: string
  phoneNumber: string
  plan: Plan
}

export interface FormErrors {
  name?: string
  email?: string
  phoneNumber?: string
}
