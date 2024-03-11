import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  )
}
export default PublicLayout