import type { Launches as LaunchType } from '../../types/generated/launches'
import type { Payload as PayloadType } from '../../types/generated/payload'

export const filterLaunchesByNationality = (
  launches: LaunchType[] = [],
  payloads: PayloadType[] = [],
  nationality: string | null,
) => {
  if (!nationality) {
    return launches
  }

  const normalizedNationality = nationality.toLowerCase()

  return launches.filter(launch =>
    launch.payloads.some(payloadId => {
      const payload = payloads.find(payload => payload.id === payloadId)

      return payload?.nationalities?.some(
        nationality => nationality.toLowerCase() === normalizedNationality,
      )
    }),
  )
}
