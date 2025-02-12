import type { HTMLAttributes } from 'react'
import * as Styled from './Card.styles'
import { LoadingSpinner } from '../loading/Loading.styles'
import defaultImage from '../../assets/logo.webp'

type Props = {
  title: string
  coverImage?: string
  date?: Date
  crewSize?: number
  payloadCount?: number
  isSuccessful?: boolean
  isLoading?: boolean
} & HTMLAttributes<HTMLDivElement>

export const Card = ({
  title,
  coverImage = defaultImage,
  date,
  isSuccessful,
  crewSize,
  payloadCount,
  isLoading,
  ...rest
}: Props) => (
  <Styled.Card {...rest} data-testid="card">
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <Styled.Cover $bgImage={coverImage} data-testid="cover-image" />
        <Styled.CardTag isSuccessful={!!isSuccessful}>
          {isSuccessful ? 'Success' : 'Failure'}
        </Styled.CardTag>

        <Styled.Content>
          <Styled.Title>{title}</Styled.Title>

          {date && !isNaN(new Date(date).getTime()) && (
            <Styled.Text>{new Date(date).toLocaleString('en-GB')}</Styled.Text>
          )}

          {crewSize || payloadCount ? (
            <Styled.TextWrapper>
              <Styled.Text>
                Crew size: <span>{crewSize ? crewSize : 'no manned mission'}</span>
              </Styled.Text>
              <Styled.Text>
                Payload count: <span>{payloadCount ? payloadCount : 'no payloads'}</span>
              </Styled.Text>
            </Styled.TextWrapper>
          ) : (
            <Styled.Text>
              The mission {isSuccessful ? ' was' : ' was not'} manned and had no payloads.
            </Styled.Text>
          )}
        </Styled.Content>
      </>
    )}
  </Styled.Card>
)
