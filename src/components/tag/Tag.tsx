import type { HTMLAttributes, PropsWithChildren } from 'react'
import * as Styled from './Tag.styles'

type Props = { isSuccessful: boolean } & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Tag = ({ children, isSuccessful, ...props }: Props) => (
  <Styled.Tag $isSuccessful={isSuccessful} {...props}>
    {children}
  </Styled.Tag>
)
