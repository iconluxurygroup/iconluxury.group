/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as ResetPasswordImport } from './routes/reset-password'
import { Route as RecoverPasswordImport } from './routes/recover-password'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutSupportImport } from './routes/_layout/support'
import { Route as LayoutSettingsImport } from './routes/_layout/settings'
import { Route as LayoutItemsImport } from './routes/_layout/items'
import { Route as LayoutAdminImport } from './routes/_layout/admin'
import { Route as LayoutScrapingApiUserAgentsImport } from './routes/_layout/scraping-api/user-agents'
import { Route as LayoutScrapingApiSearchProxiesImport } from './routes/_layout/scraping-api/search-proxies'
import { Route as LayoutScrapingApiRequestImport } from './routes/_layout/scraping-api/request'
import { Route as LayoutScrapingApiGoogleSerpImport } from './routes/_layout/scraping-api/google-serp'
import { Route as LayoutScrapingApiExploreImport } from './routes/_layout/scraping-api/explore'
import { Route as LayoutProxiesResidentialMobileImport } from './routes/_layout/proxies/residential-mobile'
import { Route as LayoutProxiesResidentialImport } from './routes/_layout/proxies/residential'
import { Route as LayoutProxiesPricingImport } from './routes/_layout/proxies/pricing'
import { Route as LayoutProxiesDatacenterMobileImport } from './routes/_layout/proxies/datacenter-mobile'
import { Route as LayoutProxiesDatacenterImport } from './routes/_layout/proxies/datacenter'
import { Route as LayoutProxiesBrowserImport } from './routes/_layout/proxies/browser'
import { Route as LayoutDatasetsRequestImport } from './routes/_layout/datasets/request'
import { Route as LayoutDatasetsExploreImport } from './routes/_layout/datasets/explore'
import { Route as LayoutScrapingApiEndpointsIndexImport } from './routes/_layout/scraping-api/endpoints/index'
import { Route as LayoutScrapingApiEndpointsEndpointIdImport } from './routes/_layout/scraping-api/endpoints/$endpointId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const ResetPasswordRoute = ResetPasswordImport.update({
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const RecoverPasswordRoute = RecoverPasswordImport.update({
  path: '/recover-password',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSupportRoute = LayoutSupportImport.update({
  path: '/support',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSettingsRoute = LayoutSettingsImport.update({
  path: '/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutItemsRoute = LayoutItemsImport.update({
  path: '/items',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  path: '/admin',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutScrapingApiUserAgentsRoute =
  LayoutScrapingApiUserAgentsImport.update({
    path: '/scraping-api/user-agents',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiSearchProxiesRoute =
  LayoutScrapingApiSearchProxiesImport.update({
    path: '/scraping-api/search-proxies',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiRequestRoute = LayoutScrapingApiRequestImport.update({
  path: '/scraping-api/request',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutScrapingApiGoogleSerpRoute =
  LayoutScrapingApiGoogleSerpImport.update({
    path: '/scraping-api/google-serp',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiExploreRoute = LayoutScrapingApiExploreImport.update({
  path: '/scraping-api/explore',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProxiesResidentialMobileRoute =
  LayoutProxiesResidentialMobileImport.update({
    path: '/proxies/residential-mobile',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutProxiesResidentialRoute = LayoutProxiesResidentialImport.update({
  path: '/proxies/residential',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProxiesPricingRoute = LayoutProxiesPricingImport.update({
  path: '/proxies/pricing',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProxiesDatacenterMobileRoute =
  LayoutProxiesDatacenterMobileImport.update({
    path: '/proxies/datacenter-mobile',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutProxiesDatacenterRoute = LayoutProxiesDatacenterImport.update({
  path: '/proxies/datacenter',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProxiesBrowserRoute = LayoutProxiesBrowserImport.update({
  path: '/proxies/browser',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDatasetsRequestRoute = LayoutDatasetsRequestImport.update({
  path: '/datasets/request',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDatasetsExploreRoute = LayoutDatasetsExploreImport.update({
  path: '/datasets/explore',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutScrapingApiEndpointsIndexRoute =
  LayoutScrapingApiEndpointsIndexImport.update({
    path: '/scraping-api/endpoints/',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutScrapingApiEndpointsEndpointIdRoute =
  LayoutScrapingApiEndpointsEndpointIdImport.update({
    path: '/scraping-api/endpoints/$endpointId',
    getParentRoute: () => LayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/recover-password': {
      preLoaderRoute: typeof RecoverPasswordImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin': {
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/items': {
      preLoaderRoute: typeof LayoutItemsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/settings': {
      preLoaderRoute: typeof LayoutSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/support': {
      preLoaderRoute: typeof LayoutSupportImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/datasets/explore': {
      preLoaderRoute: typeof LayoutDatasetsExploreImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/datasets/request': {
      preLoaderRoute: typeof LayoutDatasetsRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/browser': {
      preLoaderRoute: typeof LayoutProxiesBrowserImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/datacenter': {
      preLoaderRoute: typeof LayoutProxiesDatacenterImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/datacenter-mobile': {
      preLoaderRoute: typeof LayoutProxiesDatacenterMobileImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/pricing': {
      preLoaderRoute: typeof LayoutProxiesPricingImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/residential': {
      preLoaderRoute: typeof LayoutProxiesResidentialImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/proxies/residential-mobile': {
      preLoaderRoute: typeof LayoutProxiesResidentialMobileImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/explore': {
      preLoaderRoute: typeof LayoutScrapingApiExploreImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/google-serp': {
      preLoaderRoute: typeof LayoutScrapingApiGoogleSerpImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/request': {
      preLoaderRoute: typeof LayoutScrapingApiRequestImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/search-proxies': {
      preLoaderRoute: typeof LayoutScrapingApiSearchProxiesImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/user-agents': {
      preLoaderRoute: typeof LayoutScrapingApiUserAgentsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/endpoints/$endpointId': {
      preLoaderRoute: typeof LayoutScrapingApiEndpointsEndpointIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/scraping-api/endpoints/': {
      preLoaderRoute: typeof LayoutScrapingApiEndpointsIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutAdminRoute,
    LayoutItemsRoute,
    LayoutSettingsRoute,
    LayoutSupportRoute,
    LayoutIndexRoute,
    LayoutDatasetsExploreRoute,
    LayoutDatasetsRequestRoute,
    LayoutProxiesBrowserRoute,
    LayoutProxiesDatacenterRoute,
    LayoutProxiesDatacenterMobileRoute,
    LayoutProxiesPricingRoute,
    LayoutProxiesResidentialRoute,
    LayoutProxiesResidentialMobileRoute,
    LayoutScrapingApiExploreRoute,
    LayoutScrapingApiGoogleSerpRoute,
    LayoutScrapingApiRequestRoute,
    LayoutScrapingApiSearchProxiesRoute,
    LayoutScrapingApiUserAgentsRoute,
    LayoutScrapingApiEndpointsEndpointIdRoute,
    LayoutScrapingApiEndpointsIndexRoute,
  ]),
  LoginRoute,
  RecoverPasswordRoute,
  ResetPasswordRoute,
  SignupRoute,
])

/* prettier-ignore-end */
