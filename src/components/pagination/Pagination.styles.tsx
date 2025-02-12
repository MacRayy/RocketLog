import styled from 'styled-components'
import RCPagination from 'rc-pagination'

export const Pagination = styled(RCPagination)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '1rem',
  fontWeight: 'bold',
  color: '#8d8d8d',

  '& > li': {
    cursor: 'pointer',
  },

  '& > li:hover': {
    color: '#000',
  },

  '& > li.rc-pagination-item-active': {
    color: '#000',
  },
})
