import type { PropsWithChildren, ReactElement } from 'react'
import * as Styled from './Page.styles'

type Props = {
  title: ReactElement | string
  subtitle?: ReactElement | string
  headerLeftSlot?: ReactElement | string
  headerRightSlot?: ReactElement | string
} & PropsWithChildren

export const Page = ({
  title,
  headerRightSlot,
  headerLeftSlot,
  subtitle,
  children,
  ...props
}: Props) => {
  return (
    <Styled.Page {...props}>
      <Styled.Header>
        {headerLeftSlot && <div>{headerLeftSlot}</div>}

        <Styled.TitleContainer $isCentered={!!headerLeftSlot}>
          <Styled.H1>{title}</Styled.H1>
          {subtitle && <Styled.H2>{subtitle}</Styled.H2>}
        </Styled.TitleContainer>

        {headerRightSlot && <div>{headerRightSlot}</div>}
      </Styled.Header>

      {children}
    </Styled.Page>
  )
}
