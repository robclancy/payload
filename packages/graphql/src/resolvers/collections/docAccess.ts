import type {
  Collection,
  CollectionPermission,
  GlobalPermission,
  PayloadRequestWithData,
} from 'payload'

import { docAccessOperation, isolateObjectProperty } from 'payload'

import type { Context } from '../types.js'

export type Resolver = (
  _: unknown,
  args: {
    id: number | string
  },
  context: {
    req: PayloadRequestWithData
  },
) => Promise<CollectionPermission | GlobalPermission>

export function docAccessResolver(collection: Collection): Resolver {
  async function resolver(_, args, context: Context) {
    return docAccessOperation({
      id: args.id,
      collection,
      req: isolateObjectProperty(context.req, 'transactionID'),
    })
  }

  return resolver
}