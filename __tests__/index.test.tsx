import { render, screen } from '@testing-library/react'
import About from '../pages/about'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      name: /About Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
