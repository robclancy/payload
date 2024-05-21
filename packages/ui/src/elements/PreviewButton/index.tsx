'use client'
import React from 'react'

import { Button } from '../Button/index.js'
import { usePreviewURL } from './usePreviewURL.js'

const baseClass = 'preview-btn'

const DefaultPreviewButton: React.FC = () => {
  const { generatePreviewURL, label } = usePreviewURL()

  return (
    <Button
      buttonStyle="secondary"
      className={baseClass}
      // disabled={disabled}
      onClick={() =>
        generatePreviewURL({
          openPreviewWindow: true,
        })
      }
      size="small"
    >
      {label}
    </Button>
  )
}

type Props = {
  CustomComponent?: React.ReactNode
}

export const PreviewButton: React.FC<Props> = ({ CustomComponent }) => {
  if (CustomComponent) return CustomComponent

  return <DefaultPreviewButton />
}