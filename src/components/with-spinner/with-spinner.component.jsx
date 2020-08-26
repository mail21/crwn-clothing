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
 * Penggunaanya ada di shop component
 * 
 * const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
   const CollectionPageWithSpinner = WithSpinner(CollectionPage);

   (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
   (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />

 */

export default WithSpinner;
