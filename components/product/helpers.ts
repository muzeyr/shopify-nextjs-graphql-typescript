
type AvailableChoices = "color" | "size" | string

export type Choices = {
  [P in AvailableChoices]: string
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
