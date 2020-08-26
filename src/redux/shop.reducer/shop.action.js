import { shopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionSnapshot = await convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateShopDataAction(collectionSnapshot);
    //   this.setState({ loading: false });
    // });
    /**
     * Bedanya get dan onSnapshot adalah get menggunakan pattern promise
     * jika pakai onSnapshot yang mengikuti pattern observer onSnapshot
     * akan melakukan live update jika misal di firestore ada perubahan
     * onSnaphot akan langsung jalan, sementara jika menggunakan
     * promise pattern kita hanya mendapat datanya hanaya ketika
     * component ini mount
     */
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionSnapshot = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionSnapshot));
      })
      .catch((error) => dispatch(error.message));
  };
};
