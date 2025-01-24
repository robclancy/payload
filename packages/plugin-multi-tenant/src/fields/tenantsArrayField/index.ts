import type { ArrayField, RelationshipField } from 'payload'

export const tenantsArrayField = (args: {
  arrayFieldAccess?: ArrayField['access']
  rowFields?: ArrayField['fields']
  tenantFieldAccess?: RelationshipField['access']
  tenantFieldName: string
  tenantsCollectionSlug: string
}): ArrayField => ({
  name: args.tenantsCollectionSlug,
  type: 'array',
  access: args?.arrayFieldAccess,
  fields: [
    {
      name: args.tenantFieldName,
      type: 'relationship',
      access: args.tenantFieldAccess,
      index: true,
      relationTo: args.tenantsCollectionSlug,
      required: true,
      saveToJWT: true,
    },
    ...(args?.rowFields || []),
  ],
  saveToJWT: true,
})
