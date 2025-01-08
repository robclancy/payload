import type { Payload } from 'payload'

import { headers as getHeaders } from 'next/headers.js'

import { getTenantFromCookie } from './getTenantFromCookie.js'

type Args = {
  docID?: number | string
  payload: Payload
  slug: string
  view: 'edit' | 'list'
}
export async function getGlobalViewRedirect({
  slug,
  docID,
  payload,
  view,
}: Args): Promise<string | void> {
  const headers = await getHeaders()
  const tenant = getTenantFromCookie(headers)
  let redirectRoute

  if (tenant) {
    try {
      const { docs } = await payload.find({
        collection: slug,
        depth: 0,
        limit: 1,
        where: {
          tenant: {
            equals: tenant,
          },
        },
      })

      const tenantDocID = docs?.[0]?.id

      if (view === 'edit') {
        if (docID && !tenantDocID) {
          // viewing a document with an id but does not match the selected tenant, redirect to create route
          redirectRoute = `${payload.config.routes.admin}/collections/${slug}/create`
        } else if (tenantDocID && docID !== tenantDocID) {
          // tenant document already exists but does not match current route doc ID, redirect to matching tenant doc
          redirectRoute = `${payload.config.routes.admin}/collections/${slug}/${tenantDocID}`
        }
      } else if (view === 'list') {
        if (tenantDocID) {
          // tenant document exists, redirect to edit view
          redirectRoute = `${payload.config.routes.admin}/collections/${slug}/${tenantDocID}`
        } else {
          // tenant document does not exist, redirect to create route
          redirectRoute = `${payload.config.routes.admin}/collections/${slug}/create`
        }
      }
    } catch (e) {
      payload.logger.error(e, `${e?.message} - Multi Tenant Redirect`)
    }
  }
  return redirectRoute
}