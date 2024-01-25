import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homePageReducer from './slices/homePageSlice';
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  homePageReducer: homePageReducer,
});
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
