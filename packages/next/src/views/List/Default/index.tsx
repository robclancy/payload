'use client'

import type { CollectionComponentMap } from '@payloadcms/ui/utilities/buildComponentMap'

import { getTranslation } from '@payloadcms/translations'
import {
  Button,
  DeleteMany,
  EditMany,
  Gutter,
  ListControls,
  ListSelection,
  Pagination,
  PerPage,
  Pill,
  PublishMany,
  RelationshipProvider,
  SelectionProvider,
  SetViewActions,
  StaggeredShimmers,
  Table,
  UnpublishMany,
  useComponentMap,
  useConfig,
  useEditDepth,
  useListInfo,
  useListQuery,
  useSearchParams,
  useStepNav,
  useTranslation,
  useWindowInfo,
} from '@payloadcms/ui'
import LinkImport from 'next/link.js'
import { formatFilesize, isNumber } from 'payload/shared'
import React, { Fragment, useEffect } from 'react'

import './index.scss'

const baseClass = 'collection-list'
const Link = (LinkImport.default || LinkImport) as unknown as typeof LinkImport.default

export const DefaultListView: React.FC = () => {
  const { Header, collectionSlug, hasCreatePermission, newDocumentURL } = useListInfo()
  const { data, defaultLimit, handlePageChange, handlePerPageChange } = useListQuery()
  const { searchParams } = useSearchParams()

  const config = useConfig()

  const { getComponentMap } = useComponentMap()

  const componentMap = getComponentMap({ collectionSlug }) as CollectionComponentMap

  const {
    AfterList,
    AfterListTable,
    BeforeList,
    BeforeListTable,
    Description,
    actionsMap,
    fieldMap,
  } = componentMap || {}

  const collectionConfig = config.collections.find(
    (collection) => collection.slug === collectionSlug,
  )

  const { labels } = collectionConfig

  const { i18n } = useTranslation()

  const drawerDepth = useEditDepth()

  const { setStepNav } = useStepNav()

  const {
    breakpoints: { s: smallBreak },
  } = useWindowInfo()

  let docs = data.docs || []

  if (collectionConfig.upload) {
    docs = docs?.map((doc) => {
      return {
        ...doc,
        filesize: formatFilesize(doc.filesize),
      }
    })
  }

  useEffect(() => {
    if (drawerDepth <= 1) {
      setStepNav([
        {
          label: labels?.plural,
        },
      ])
    }
  }, [setStepNav, labels, drawerDepth])

  return (
    <div className={baseClass}>
      <SetViewActions actions={actionsMap?.List} />
      {BeforeList}
      <SelectionProvider docs={data.docs} totalDocs={data.totalDocs}>
        <Gutter className={`${baseClass}__wrap`}>
          <header className={`${baseClass}__header`}>
            {Header || (
              <Fragment>
                <h1>{getTranslation(labels?.plural, i18n)}</h1>
                {hasCreatePermission && (
                  <Pill
                    aria-label={i18n.t('general:createNewLabel', {
                      label: getTranslation(labels?.singular, i18n),
                    })}
                    to={newDocumentURL}
                  >
                    {i18n.t('general:createNew')}
                  </Pill>
                )}
                {!smallBreak && (
                  <ListSelection label={getTranslation(collectionConfig.labels.plural, i18n)} />
                )}
                {Description && <div className={`${baseClass}__sub-header`}>{Description}</div>}
              </Fragment>
            )}
          </header>
          <ListControls collectionConfig={collectionConfig} fieldMap={fieldMap} />
          {BeforeListTable}
          {!data.docs && (
            <StaggeredShimmers
              className={[`${baseClass}__shimmer`, `${baseClass}__shimmer--rows`].join(' ')}
              count={6}
            />
          )}
          {data.docs && data.docs.length > 0 && (
            <RelationshipProvider>
              <Table
                customCellContext={{
                  collectionSlug,
                  uploadConfig: collectionConfig.upload,
                }}
                data={docs}
                fieldMap={fieldMap}
              />
            </RelationshipProvider>
          )}
          {data.docs && data.docs.length === 0 && (
            <div className={`${baseClass}__no-results`}>
              <p>{i18n.t('general:noResults', { label: getTranslation(labels?.plural, i18n) })}</p>
              {hasCreatePermission && newDocumentURL && (
                <Button Link={Link} el="link" to={newDocumentURL}>
                  {i18n.t('general:createNewLabel', {
                    label: getTranslation(labels?.singular, i18n),
                  })}
                </Button>
              )}
            </div>
          )}
          {AfterListTable}
          {data.docs && data.docs.length > 0 && (
            <div className={`${baseClass}__page-controls`}>
              <Pagination
                hasNextPage={data.hasNextPage}
                hasPrevPage={data.hasPrevPage}
                limit={data.limit}
                nextPage={data.nextPage}
                numberOfNeighbors={1}
                onChange={handlePageChange}
                page={data.page}
                prevPage={data.prevPage}
                totalPages={data.totalPages}
              />
              {data?.totalDocs > 0 && (
                <Fragment>
                  <div className={`${baseClass}__page-info`}>
                    {data.page * data.limit - (data.limit - 1)}-
                    {data.totalPages > 1 && data.totalPages !== data.page
                      ? data.limit * data.page
                      : data.totalDocs}{' '}
                    {i18n.t('general:of')} {data.totalDocs}
                  </div>
                  <PerPage
                    handleChange={handlePerPageChange}
                    limit={
                      isNumber(searchParams?.limit) ? Number(searchParams.limit) : defaultLimit
                    }
                    limits={collectionConfig?.admin?.pagination?.limits}
                    resetPage={data.totalDocs <= data.pagingCounter}
                  />
                  {smallBreak && (
                    <div className={`${baseClass}__list-selection`}>
                      <Fragment>
                        <ListSelection
                          label={getTranslation(collectionConfig.labels.plural, i18n)}
                        />
                        <div className={`${baseClass}__list-selection-actions`}>
                          <EditMany collection={collectionConfig} fieldMap={fieldMap} />
                          <PublishMany collection={collectionConfig} />
                          <UnpublishMany collection={collectionConfig} />
                          <DeleteMany collection={collectionConfig} />
                        </div>
                      </Fragment>
                    </div>
                  )}
                </Fragment>
              )}
            </div>
          )}
        </Gutter>
      </SelectionProvider>
      {AfterList}
    </div>
  )
}