import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { AppRoutes } from './constants/routes'

vi.mock('@pages/launches/Launches', () => ({
  Launches: () => <div data-testid="launches-page">Launches Page</div>,
}))

vi.mock('@pages/launchDetails/LaunchDetails', () => ({
  LaunchDetails: () => <div data-testid="launch-details-page">Launch Details Page</div>,
}))

describe('App', () => {
  it('renders Launches page on home route', () => {
    render(
      <MemoryRouter initialEntries={[AppRoutes.Home]}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('launches-page')).toBeInTheDocument()
  })

  it('renders LaunchDetails page on details route', () => {
    render(
      <MemoryRouter initialEntries={['/details/FN-2187']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('launch-details-page')).toBeInTheDocument()
  })

  it('renders Launches page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('launches-page')).toBeInTheDocument()
  })
})
