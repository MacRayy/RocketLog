import * as Styled from './Pagination.styles'
import type { PaginationProps } from 'rc-pagination'

export const Pagination = (props: PaginationProps) => (
  <Styled.Pagination
    align="center"
    hideOnSinglePage
    prevIcon="&#10229;"
    nextIcon="&#10230;"
    jumpNextIcon="+5"
    jumpPrevIcon="-5"
    showSizeChanger={false}
    {...props}
  />
)
