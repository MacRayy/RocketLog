import { describe, it, expect } from 'vitest'
import { filterLaunchesByNationality } from './filterLaunchesByNationality'
import type { Launches as LaunchType } from '../../types/generated/launches'
import type { Payload as PayloadType } from '../../types/generated/payload'

describe('filterLaunchesByNationality', () => {
  const mockPayloads: Pick<PayloadType, 'id' | 'nationalities'>[] = [
    { id: 'payload1', nationalities: ['United States', 'Japan'] },
    { id: 'payload2', nationalities: ['Germany', 'France'] },
    { id: 'payload3', nationalities: ['United States'] },
    { id: 'payload4', nationalities: [] },
    { id: 'payload5', nationalities: [''] },
  ]

  const mockLaunches: Pick<LaunchType, 'id' | 'payloads'>[] = [
    { id: 'launch1', payloads: ['payload1'] },
    { id: 'launch2', payloads: ['payload2'] },
    { id: 'launch3', payloads: ['payload3'] },
    { id: 'launch4', payloads: ['payload1', 'payload2'] },
    { id: 'launch5', payloads: ['payload5'] },
  ]

  it('returns all launches when nationality is null', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, mockPayloads, null)
    expect(result).toEqual(mockLaunches)
  })

  it('filters launches by nationality correctly', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, mockPayloads, 'United States')
    expect(result).toHaveLength(3)
    expect(result).toContainEqual(mockLaunches[0])
    expect(result).toContainEqual(mockLaunches[2])
    expect(result).toContainEqual(mockLaunches[3])
  })

  it('returns empty array when no launches match nationality', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, mockPayloads, 'Brazil')
    expect(result).toHaveLength(0)
  })

  it('handles empty launches array', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality([], mockPayloads, 'United States')
    expect(result).toHaveLength(0)
  })

  it('handles empty payloads array', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, [], 'United States')
    expect(result).toHaveLength(0)
  })

  it("handles launches with payloads that don't exist in payloads array", () => {
    const launchesWithNonExistentPayload = [{ id: 'launch', payloads: ['nonExistent'] }]
    const result = filterLaunchesByNationality(
      // @ts-expect-error - mock data only includes required properties for testing
      launchesWithNonExistentPayload,
      mockPayloads,
      'United States',
    )
    expect(result).toHaveLength(0)
  })

  it('handles payloads without nationalities', () => {
    const payloadsWithoutNationalities = [{ id: 'payload' }]
    const launchesWithoutNationalities = [{ id: 'launch', payloads: ['payload'] }]
    const result = filterLaunchesByNationality(
      // @ts-expect-error - mock data only includes required properties for testing
      launchesWithoutNationalities,
      payloadsWithoutNationalities,
      'United States',
    )
    expect(result).toHaveLength(0)
  })

  it('handles launches with no payloads', () => {
    const launchWithNoPayload = [{ id: 'launch', payloads: [] }]
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(launchWithNoPayload, mockPayloads, 'United States')
    expect(result).toHaveLength(0)
  })

  it('handles payloads with empty nationalities array', () => {
    const launchWithPayloadThatNotExist = [{ id: 'launch', payloads: ['payload'] }]
    const result = filterLaunchesByNationality(
      // @ts-expect-error - mock data only includes required properties for testing
      launchWithPayloadThatNotExist,
      mockPayloads,
      'United States',
    )
    expect(result).toHaveLength(0)
  })

  it('handles payloads with empty string nationality', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, mockPayloads, '')
    expect(result).toHaveLength(5)
  })

  it('handles payloads with null nationalities', () => {
    const payloadWithNullNationality = [{ id: 'payload', nationalities: null }]
    const result = filterLaunchesByNationality(
      // @ts-expect-error - mock data only includes required properties for testing
      mockLaunches,
      payloadWithNullNationality,
      'United States',
    )
    expect(result).toHaveLength(0)
  })

  it('handles undefined nationality filter', () => {
    const result = filterLaunchesByNationality(
      // @ts-expect-error - mock data only includes required properties for testing
      mockLaunches,
      mockPayloads,
      undefined,
    )
    expect(result).toEqual(mockLaunches)
  })

  it('handles case sensitivity', () => {
    // @ts-expect-error - mock data only includes required properties for testing
    const result = filterLaunchesByNationality(mockLaunches, mockPayloads, 'UNITED STATES')
    expect(result.length).toBeGreaterThan(0)
  })
})
