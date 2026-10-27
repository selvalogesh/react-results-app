import React, { lazy, Suspense } from 'react';

const LazyLogout = lazy(() => import('./Logout'));

const Logout = props => (
  <Suspense fallback={null}>
    <LazyLogout {...props} />
  </Suspense>
);

export default Logout;
