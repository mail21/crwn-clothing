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

export const selectCollection = (urlParameter) => {
  return createSelector([getCollections], (collections) => collections[urlParameter]);
};

/*
  karena data dari shop_data sudah di normalisasi dan datanya sudah bukan array lagi 
  melainkan objek jadinya kita hanya memanggil memberi keynya saja
  urlParameter = mens atau womens atau sneakers dll
  jadinya collections[sneakers] 
  jadinya akan mereturn objek sneakers 
  
*/
