import WorkDetail from '@/components/work/WorkDetail'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
        <WorkDetail/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/work/:slug");
}
