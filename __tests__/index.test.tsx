import { render, screen } from '@testing-library/react'
import About from '../pages/about'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import { Product } from '@common/types/product'

describe('About Page', () => {
  it('renders a heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      name: /About Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
