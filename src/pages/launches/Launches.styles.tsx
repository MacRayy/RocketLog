import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Grid = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1rem',
  margin: '0',
})

export const Title = styled.button({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'black',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
})

export const Select = styled(ReactSelect)({
  width: 200,

  '& > div:first-of-type': {
    backgroundColor: '#efefef',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})
