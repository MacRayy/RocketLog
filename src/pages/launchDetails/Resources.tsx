import * as Styled from '@pages/launchDetails/LaunchDetails.styles.tsx'
import youTubeIcon from '../../assets/youtube.png'
import redditIcon from '../../assets/reddit.png'
import wikipediaIcon from '../../assets/social.png'

type Props = {
  youtubeLink: string | null
  redditLink: string | null
  wikipediaLink: string | null
}

export const Resources = ({ youtubeLink, redditLink, wikipediaLink }: Props) => (
  <Styled.InfoBox>
    <Styled.InfoTitle>Read more</Styled.InfoTitle>
    {!youtubeLink && !redditLink && !wikipediaLink ? (
      <p>No available resources</p>
    ) : (
      <Styled.InfoRow>
        {youtubeLink && (
          <Styled.Link href={youtubeLink} target="_blank" rel="noreferrer noopener">
            <Styled.LinkIcon src={youTubeIcon} alt="youtube logo" />
            YouTube
          </Styled.Link>
        )}

        {redditLink && (
          <Styled.Link href={redditLink} target="_blank" rel="noreferrer noopener">
            <Styled.LinkIcon src={redditIcon} alt="reddit logo" />
            Reddit
          </Styled.Link>
        )}

        {wikipediaLink && (
          <Styled.Link href={wikipediaLink} target="_blank" rel="noreferrer noopener">
            <Styled.LinkIcon src={wikipediaIcon} alt="wikipedia logo" />
            Wikipedia
          </Styled.Link>
        )}
      </Styled.InfoRow>
    )}
  </Styled.InfoBox>
)
