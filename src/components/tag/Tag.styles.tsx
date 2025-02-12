import styled from 'styled-components'

type TagProps = {
  $isSuccessful: boolean
}

export const Tag = styled.div<TagProps>(({ $isSuccessful }) => ({
  ...{
    padding: '0.2rem',
    borderRadius: '0.2rem',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ...($isSuccessful
    ? {
        backgroundColor: '#05ad52',
      }
    : {
        backgroundColor: '#ff4d4f',
      }),
}))
