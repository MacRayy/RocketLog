import styled from 'styled-components'

export const Page = styled.main({
  padding: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '100%',
  width: '100%',
  maxWidth: '1450px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    padding: '2rem',
  },
})

export const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  flexWrap: 'wrap',
})

export const TitleContainer = styled.div<{ $isCentered: boolean }>(({ $isCentered }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: $isCentered ? '0 auto' : '0',
  alignItems: 'center',
}))

export const H1 = styled.h1({
  fontSize: '2rem',
  fontWeight: 'bold',
})

export const H2 = styled.h2({
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#8d8d8d',
})
