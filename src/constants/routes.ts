export const AppRoutes = {
  Home: '/',
  Details: '/details/:id',
} as const

export type TAppRoutes = keyof typeof AppRoutes
