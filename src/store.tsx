// // store.tsx
// import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from "./reducers/reducers";
// import { persistStore, persistReducer, FLUSH,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//         }
//     })
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { legacy_createStore as createStore } from "redux";
import contactReducer from "./reducers/reducers";

let store = createStore(contactReducer);

export default store;


