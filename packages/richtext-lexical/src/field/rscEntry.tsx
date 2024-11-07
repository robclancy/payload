import {
  type ClientComponentProps,
  type RichTextFieldClient,
  type ServerComponentProps,
} from 'payload'
import React from 'react'

import type { SanitizedServerEditorConfig } from '../lexical/config/types.js'
import type { LexicalFieldAdminProps } from '../types.js'

import { initLexicalFeatures } from '../utilities/initLexicalFeatures.js'
import { RichTextField } from './index.js'
export const RscEntryLexicalField: React.FC<
  {
    admin: LexicalFieldAdminProps
    sanitizedEditorConfig: SanitizedServerEditorConfig
  } & ClientComponentProps &
    ServerComponentProps
> = (args) => {
  const { clientFeatures, featureClientSchemaMap } = initLexicalFeatures({
    fieldSchemaMap: args.fieldSchemaMap,
    i18n: args.i18n,
    path: args.path,
    payload: args.payload,
    sanitizedEditorConfig: args.sanitizedEditorConfig,
    schemaPath: args.schemaPath,
  })
  return (
    <RichTextField
      admin={args.admin}
      clientFeatures={clientFeatures}
      featureClientSchemaMap={featureClientSchemaMap}
      field={args.clientField as RichTextFieldClient}
      forceRender={args.forceRender}
      indexPath={args.indexPath}
      lexicalEditorConfig={args.sanitizedEditorConfig.lexical}
      parentPath={args.parentPath}
      parentSchemaPath={args.parentSchemaPath}
      path={args.path}
      permissions={args.permissions}
      readOnly={args.readOnly}
      renderedBlocks={args.renderedBlocks}
      rowLabels={args.rowLabels}
      schemaPath={args.schemaPath}
    />
  )
}