import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('le bouton doit incrémenter le compteur', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /count is/i })
  expect(button).toHaveTextContent('count is 0')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 1')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 2')
})
