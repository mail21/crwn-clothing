import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const getCollections = createSelector([selectShop], (shop) => shop.collections);
// const COLLECTIONS_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

// export const selectCollection = (urlParameter) => {
//   return createSelector([getCollections], (collections) =>
//     collections.find((collection) => collection.id === COLLECTIONS_ID_MAP[urlParameter])
//   );
// };

/**
   kode selectCollection memang membingungkan jadi COLLECTIONS_ID_MAP[urlParameter]
   urlParameter akan menerima nilai string pathnya seperti womens,mens,jackets,hats
   dan nanti akan gini 
   COLLECTIONS_ID_MAP['mens'] = 5
   COLLECTIONS_ID_MAP['womens'] = 4
   COLLECTIONS_ID_MAP['hats'] = 1
   COLLECTIONS_ID_MAP['sneakers'] = 2
   jadi nanti collection.id akan dibandingkan dengan angka stringnya
   lalu .find akan mengembalikan objek dari hasil perbandingannya
 */

export const selectCollectionForPreview = createSelector([getCollections], (collection) => {
  /*
  console.log(Object.keys(collection));
   - hasil : 
  ["hats", "sneakers", "jackets", "womens", "mens"]
  array disini akan di map ^
  agar mereturn array, dan agar bisa dipakai oleh collections-overview

  collection[hats]
  collection[sneakers]
  
   console.log(Object.keys(collection).map((key) => collection[key]));
   - hasil :
  (5) [{…}, {…}, {…}, {…}, {…}]
  0: {id: 1, title: "Hats", routeName: "/shop/hats", items: Array(9)}
  1: {id: 2, title: "Sneakers", routeName: "sneakers", items: Array(8)}
  2: {id: 3, title: "Jackets", routeName: "jackets", items: Array(5)}
  3: {id: 4, title: "Womens", routeName: "womens", items: Array(7)}
  4: {id: 5, title: "Mens", routeName: "mens", items: Array(6)}

  melakukan cara ini agar nanti bisa di map di collections-overview, karena 
  di data shopnya adalah object bukan array, bisa diakali dengan cara ini
  */
  return collection ? Object.keys(collection).map((key) => collection[key]) : [];
});

export const selectCollection = (urlParameter) => {
  return createSelector([getCollections], (collections) =>
    collections ? collections[urlParameter] : null
  );
};
/*
  karena data dari shop_data sudah di normalisasi dan datanya sudah bukan array lagi 
  melainkan objek jadinya kita hanya memanggil memberi keynya saja
  urlParameter = mens atau womens atau sneakers dll
  jadinya collections[sneakers] 
  jadinya akan mereturn objek sneakers 
  
*/

export const selectIsFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

/**
 * selectIsCollectionsLoaded is it essentially just determines and returns a boolean
 * value of whether or not our collection is null or not.
 *
 * !! -> mengecek sebuah value apakah false atau true
 * sama aja kayak menggunakan Boolean()
 */
