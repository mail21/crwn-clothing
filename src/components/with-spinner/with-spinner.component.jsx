import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// WithSpinner adalah higherOrderComponent

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};
/**
 * Contoh Penggunaan
 * 
 * const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
   const CollectionPageWithSpinner = WithSpinner(CollectionPage);

   <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
   <CollectionPageWithSpinner isLoading={loading} {...props} />

 */

export default WithSpinner;
