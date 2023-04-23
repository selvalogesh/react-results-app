import React, { lazy, Suspense } from 'react';

const LazyResult = lazy(() => import('./Result'));

const Result = props => (
  <Suspense fallback={null}>
    <LazyResult {...props} />
  </Suspense>
);

export default Result;
