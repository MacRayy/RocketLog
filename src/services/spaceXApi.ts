import type { Launches } from '../types/generated/launches'
import type { Payload } from '../types/generated/payload'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type LaunchesQueryParams = {
  page?: number
  limit?: number
  query?: Record<string, string | number>
  id?: string
}

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4/' }),
  endpoints: builder => ({
    getLaunches: builder.query<Launches[], void>({
      query: () => ({
        url: 'launches',
        method: 'GET',
      }),
    }),

    getUpcomingLaunches: builder.query<Launches[], void>({
      query: () => ({
        url: 'launches/upcoming',
        method: 'GET',
      }),
    }),

    getOneLaunch: builder.query<Launches, string>({
      query: id => ({
        url: `launches/${id}`,
        method: 'GET',
      }),
    }),

    queryLaunches: builder.query<{ docs: Launches[]; totalDocs: number }, LaunchesQueryParams>({
      query: ({ page = 1, limit = 8 } = {}) => ({
        url: 'launches/query',
        method: 'POST',
        body: {
          options: {
            page,
            limit,
            sort: {
              date_unix: 'desc',
            },
            populate: [
              {
                path: 'payloads',
                select: 'nationalities',
              },
              {
                path: 'launchpad',
                select: {
                  images: 1,
                },
              },
            ],
          },
        },
      }),
    }),

    queryOneLaunch: builder.query<Launches, LaunchesQueryParams>({
      query: ({ id } = {}) => ({
        url: 'launches/query',
        method: 'POST',
        body: {
          query: { _id: id },
          options: {
            limit: 1,
            populate: [
              {
                path: 'launchpad',
                select: [
                  {
                    images: 1,
                  },
                  'locality',
                ],
              },
            ],
            select: ['name', 'details', 'links', 'date_utc'],
          },
        },
      }),
      transformResponse: (response: { docs: Launches[] }) => response.docs[0],
    }),

    getAllPayloads: builder.query<Payload[], void>({
      query: () => ({
        url: 'payloads',
        method: 'GET',
      }),
    }),

    getOnePayload: builder.query<Payload, string>({
      query: id => ({
        url: `payloads/${id}`,
        method: 'GET',
      }),
    }),
  }),
})
export const {
  useGetLaunchesQuery,
  useGetUpcomingLaunchesQuery,
  useQueryLaunchesQuery,
  useQueryOneLaunchQuery,
  useGetOneLaunchQuery,
  useGetAllPayloadsQuery,
  useGetOnePayloadQuery,
} = spaceXApi
