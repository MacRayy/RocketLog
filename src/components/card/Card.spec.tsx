import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card } from './Card'

const dateRegex = /\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}/ //DD/MM/YYYY, HH:MM:SS

describe('Card', () => {
  const defaultProps = {
    title: 'Test Launch',
    date: new Date('2024-01-30:05:00:00'),
    crewSize: 3,
    payloadCount: 2,
    isSuccessful: true,
  }

  describe('Loading State', () => {
    it('shows loading spinner when isLoading is true', () => {
      render(<Card {...defaultProps} isLoading />)
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
      // Verify content is not shown while loading
      expect(screen.queryByText('Test Launch')).not.toBeInTheDocument()
    })

    it('shows content when not loading', () => {
      render(<Card {...defaultProps} isLoading={false} />)
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
      expect(screen.getByText('Test Launch')).toBeInTheDocument()
    })
  })

  describe('Content Rendering', () => {
    it('renders all basic information', () => {
      render(<Card {...defaultProps} />)

      expect(screen.getByText('Test Launch')).toBeInTheDocument()
      expect(screen.getByText('30/01/2024, 05:00:00')).toBeInTheDocument()
      expect(screen.getByText('Crew size:')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('Payload count:')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
    })

    it('shows success status', () => {
      render(<Card {...defaultProps} isSuccessful />)
      expect(screen.getByText('Success')).toBeInTheDocument()
    })

    it('shows failure status', () => {
      render(<Card {...defaultProps} isSuccessful={false} />)
      expect(screen.getByText('Failure')).toBeInTheDocument()
    })

    it('renders default image when no cover image provided', () => {
      render(<Card {...defaultProps} />)
      const img = screen.getByTestId('cover-image')
      expect(img).toHaveStyle({
        backgroundImage: expect.stringContaining('logo.webp'),
      })
    })

    it('renders provided cover image', () => {
      const coverImage = 'test-image.jpg'
      render(<Card {...defaultProps} coverImage={coverImage} />)
      const img = screen.getByTestId('cover-image')
      expect(img).toHaveStyle({
        backgroundImage: expect.stringContaining(coverImage),
      })
    })
  })

  describe('Optional Props', () => {
    it('renders without date', () => {
      render(<Card {...defaultProps} date={undefined} />)
      const dateElement = screen.queryByText(dateRegex)
      expect(dateElement).not.toBeInTheDocument()
    })

    describe('Crew and Payload Information', () => {
      it('shows crew size and payload count when both exist', () => {
        render(<Card {...defaultProps} crewSize={3} payloadCount={2} />)
        expect(screen.getByText('Crew size:')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('Payload count:')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
      })

      it('shows "no manned mission" when crewSize is 0', () => {
        render(<Card {...defaultProps} crewSize={0} payloadCount={2} />)
        expect(screen.getByText('no manned mission')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
      })

      it('shows "no payloads" when payloadCount is 0', () => {
        render(<Card {...defaultProps} crewSize={3} payloadCount={0} />)
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('no payloads')).toBeInTheDocument()
      })

      it('shows alternative text when both crew and payload are missing', () => {
        render(<Card {...defaultProps} crewSize={0} payloadCount={0} />)
        expect(screen.getByText('The mission was manned and had no payloads.')).toBeInTheDocument()
      })

      it('shows correct message for unsuccessful mission without crew and payload', () => {
        render(<Card {...defaultProps} isSuccessful={false} crewSize={0} payloadCount={0} />)
        expect(
          screen.getByText('The mission was not manned and had no payloads.'),
        ).toBeInTheDocument()
      })

      it('shows crew info when only crew exists', () => {
        render(<Card {...defaultProps} crewSize={3} payloadCount={0} />)
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('no payloads')).toBeInTheDocument()
      })

      it('shows payload info when only payload exists', () => {
        render(<Card {...defaultProps} crewSize={0} payloadCount={2} />)
        expect(screen.getByText('no manned mission')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
      })
    })
  })

  describe('Date Formatting', () => {
    it('formats date correctly', () => {
      const testDate = new Date('2024-01-30T12:00:00')
      render(<Card {...defaultProps} date={testDate} />)
      expect(screen.getByText('30/01/2024, 12:00:00')).toBeInTheDocument()
    })

    it('handles invalid date string', () => {
      render(<Card {...defaultProps} date={new Date('invalid-date')} />)
      expect(screen.queryByText(dateRegex)).not.toBeInTheDocument()
    })

    it('handles null date', () => {
      // @ts-expect-error testing invalid input
      render(<Card {...defaultProps} date={null} />)
      expect(screen.queryByText(dateRegex)).not.toBeInTheDocument()
    })

    it('handles undefined date', () => {
      render(<Card {...defaultProps} date={undefined} />)
      expect(screen.queryByText(dateRegex)).not.toBeInTheDocument()
    })

    it('handles malformed date object', () => {
      // @ts-expect-error testing invalid input
      render(<Card {...defaultProps} date={{ invalid: 'object' }} />)
      expect(screen.queryByText(dateRegex)).not.toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('passes through HTML attributes', () => {
      render(<Card {...defaultProps} data-testid="test-card" aria-label="Launch card" />)
      const card = screen.getByTestId('card')
      expect(card).toHaveAttribute('aria-label', 'Launch card')
    })
  })
})
