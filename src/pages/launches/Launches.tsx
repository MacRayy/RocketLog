import { useMemo, useState } from 'react'
import { NavLink } from 'react-router'
import { Card, Page, LoadingSpinner } from '@components/components'
import { useGetAllPayloadsQuery, useGetLaunchesQuery } from '@services/spaceXApi'
import type { Launches as LaunchType } from '../../types/generated/launches'
import * as Styled from './Launches.styles'
import { Pagination } from '@components/pagination/Pagination'
import { filterLaunchesByNationality } from '@pages/launches/filterLaunchesByNationality.ts'
import { LaunchSelector } from '@pages/launches/LaunchSelector.tsx'

const PAGE_SIZE = 8

const sortLaunches = (launches: LaunchType[] = []) =>
  [...launches].sort((a, b) => b.date_unix - a.date_unix)

export const Launches = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedNationality, setSelectedNationality] = useState<string | null>(null)

  const { data: launches, isLoading: isLaunchLoading } = useGetLaunchesQuery()
  const { data: payloads } = useGetAllPayloadsQuery()

  const filteredLaunches = sortLaunches(
    filterLaunchesByNationality(launches, payloads, selectedNationality),
  )

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedLaunches = filteredLaunches?.slice(startIndex, startIndex + PAGE_SIZE)
  const total = filteredLaunches?.length || 0

  const nationalities = useMemo(() => {
    if (!payloads) {
      return []
    }
    const uniqueNationalities = new Set<string>()
    payloads.map(payload => {
      payload.nationalities?.map(nationality => uniqueNationalities.add(nationality))
    })
    return Array.from(uniqueNationalities).sort()
  }, [payloads])

  return (
    <Page
      title={
        <Styled.Title onClick={() => setSelectedNationality(null)}>
          Space X latest launches
        </Styled.Title>
      }
      headerRightSlot={
        <LaunchSelector
          selectedNationality={selectedNationality}
          setSelectedNationality={setSelectedNationality}
          nationalities={nationalities}
          setCurrentPage={setCurrentPage}
        />
      }
    >
      {isLaunchLoading && <LoadingSpinner />}

      <Styled.Grid>
        {paginatedLaunches ? (
          paginatedLaunches.map(launch => (
            <NavLink to={`/details/${launch.id}`} key={launch.id}>
              <Card
                title={launch.name}
                coverImage={launch.links.patch.small ?? undefined}
                date={launch.date_utc}
                crewSize={launch.crew.length}
                payloadCount={launch.payloads.length}
                isSuccessful={!!launch.success}
                isLoading={isLaunchLoading}
              />
            </NavLink>
          ))
        ) : (
          <Card title="No launches found" />
        )}
      </Styled.Grid>

      <Pagination
        current={currentPage}
        total={total}
        pageSize={PAGE_SIZE}
        onChange={setCurrentPage}
      />
    </Page>
  )
}
