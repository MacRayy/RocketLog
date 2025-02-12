import { useParams } from 'react-router'
import { Page } from '@components/page/Page'
import { useQueryOneLaunchQuery } from '@services/spaceXApi'
import { LoadingSpinner } from '@components/components'
import { AppRoutes } from '../../constants/routes'
import * as Styled from './LaunchDetails.styles'
import defaultImage from '../../assets/logo.webp'
import { Resources } from './Resources'

export const LaunchDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data: launch, isLoading: isLaunchLoading } = useQueryOneLaunchQuery({ id })

  return (
    <Page
      title={launch?.name ?? 'Launch details'}
      subtitle={launch?.date_utc && new Date(launch?.date_utc).toLocaleString('en-GB')}
      headerLeftSlot={<Styled.BackLink to={AppRoutes.Home}>&#60; Back to launches</Styled.BackLink>}
      data-testid="launch-details-page"
    >
      {isLaunchLoading && <LoadingSpinner />}

      {launch && (
        <Styled.Container>
          <Styled.Cover $bgImage={launch.links?.patch?.large ?? defaultImage} />

          <Styled.Info>
            <Styled.InfoBox>
              <Styled.InfoTitle>Description of launch</Styled.InfoTitle>
              <p>{launch.details ?? 'No available description'}</p>
            </Styled.InfoBox>

            <Styled.InfoBox>
              <Styled.InfoTitle>Location</Styled.InfoTitle>
              {/* @ts-expect-error - locality is part of launchpad, but it's not present in the generated type*/}
              <p>{launch.launchpad?.locality}</p>
            </Styled.InfoBox>

            <Resources
              youtubeLink={launch.links?.webcast}
              redditLink={launch.links?.reddit?.campaign}
              wikipediaLink={launch.links?.wikipedia}
            />
          </Styled.Info>
        </Styled.Container>
      )}
    </Page>
  )
}
