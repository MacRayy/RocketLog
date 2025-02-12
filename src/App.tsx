import { Routes, Route } from 'react-router'
import { AppRoutes } from './constants/routes.ts'
import { Launches } from '@pages/launches/Launches'
import { LaunchDetails } from '@pages/launchDetails/LaunchDetails'
import { Navigate } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Launches data-testid="launches-page" />} />

      <Route
        path={AppRoutes.Details}
        element={<LaunchDetails data-testid="launch-details-page" />}
      />

      <Route path="*" element={<Navigate to={AppRoutes.Home} replace />} />
    </Routes>
  )
}
