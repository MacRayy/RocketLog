import { test, expect } from '@playwright/test'

test.describe('Launches Page', () => {
  test('loading and cards', async ({ page }) => {
    await page.goto('http://localhost:5173')

    await page.getByTestId('loading-spinner').waitFor()

    await page.getByTestId('card').first().waitFor()
    const cards = page.getByTestId('card')
    await expect(cards).toHaveCount(8)
  })

  test('navigation to details page', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.getByTestId('card').first().waitFor()

    await page.getByTestId('card').first().click()

    await expect(page).toHaveURL(/\/details\//)
    await expect(page.getByTestId('launch-details-page')).toBeVisible()
  })
})
