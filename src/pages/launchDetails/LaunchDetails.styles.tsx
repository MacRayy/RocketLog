import styled from 'styled-components'
import { NavLink } from 'react-router'

type CoverProps = {
  $bgImage: string
}

const TABLET_BREAKPOINT = 768

export const BackLink = styled(NavLink)({
  fontWeight: 'bold',

  '&:hover': {
    color: '#4A6AED',
  },
})

export const Container = styled.section({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '2rem',

  [`@media (max-width: ${TABLET_BREAKPOINT}px)`]: {
    gridTemplateColumns: '1fr',
  },
})

export const Cover = styled.div<CoverProps>(({ $bgImage }) => ({
  backgroundImage: `url(${$bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'contain',
  minHeight: 500,

  [`@media (max-width: ${TABLET_BREAKPOINT}px)`]: {
    minHeight: 200,
  },
}))

export const Info = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const InfoBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const InfoRow = styled.div({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
})

export const InfoTitle = styled.h4({
  fontSize: '0.8rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: '#8d8d8d',
})

export const Link = styled.a({
  display: 'flex',
  gap: '0.5rem',
  textDecoration: 'underline',

  '&:hover': {
    color: '#4A6AED',
  },
})

export const LinkIcon = styled.img({
  width: 20,
  height: 20,
})
