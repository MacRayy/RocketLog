import styled from 'styled-components'
import { Tag } from '../tag/Tag'

type CoverProps = {
  $bgImage: string
}

export const Card = styled.section({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '0.8rem',
  border: '1px solid #d9d9d9',
  position: 'relative',
  height: '100%',
  transition: 'box-shadow 0.2s',

  '&:hover': {
    boxShadow: '0 0 0.4rem 0 rgba(0,0,0,0.1)',
  },
})

export const Cover = styled.div<CoverProps>(({ $bgImage }) => ({
  backgroundImage: `url(${$bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  minHeight: 250,
}))

export const CardTag = styled(Tag)({
  position: 'absolute',
  top: '0.6rem',
  right: '0.6rem',
})

export const Content = styled.div({
  padding: '0 1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  height: '100%',
})

export const TextWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '0.25rem',
  marginTop: 'auto',
})

export const Title = styled.h3({
  fontWeight: 'bold',
})

export const Text = styled.p({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'space-between',
  color: '#8d8d8d',
})
