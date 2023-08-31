import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartRedux';
import userReducer from "./userRedux";
import registerRedux from "./registerRedux";
import orderRedux from "./orderRedux";
import storage from "redux-persist/lib/storage";
import { persistStore,persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist"
import logoutRedux from "./logoutRedux";
import WishRedux from "./WishRedux";
    
    const persistConfig = {
      key: 'root',
      version: 1,
      storage,

    }
    const rootReducer=combineReducers({
        cart:cartReducer, 
        user:userReducer,
        order:orderRedux,
        wish:WishRedux,
        })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const store = configureStore({
  // cart:cartReducer,
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export let persistor=persistStore(store)