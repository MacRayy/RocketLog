import * as Styled from '@pages/launches/Launches.styles'
import type { ActionMeta } from 'react-select'

type Props = {
  selectedNationality: string | null
  setSelectedNationality: (nationality: string | null) => void
  nationalities: string[]
  setCurrentPage: (page: number) => void
}

type OptionType = {
  value: string | null
  label: string
}

export const LaunchSelector = ({
  selectedNationality,
  setSelectedNationality,
  setCurrentPage,
  nationalities,
}: Props) => (
  <Styled.Select
    options={[
      { value: null, label: 'Every launch' },
      ...nationalities.map(nationality => ({ value: nationality, label: nationality })),
    ]}
    value={{ value: selectedNationality, label: selectedNationality ?? 'Every launch' }}
    onChange={(newValue: unknown, _: ActionMeta<unknown>) => {
      const option = newValue as OptionType
      setSelectedNationality(option?.value ?? null)
      setCurrentPage(1)
    }}
  />
)
