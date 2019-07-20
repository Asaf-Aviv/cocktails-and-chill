import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import cocktailsReducer from './cocktails/reducers';
import randomCocktailsReducer from './randomCocktails/reducers';
import ingredientReducer from './ingredients/reducers';
import generalReducer from './general/reducers';
import cacheReducer from './cache/reducers';

const rootReducer = combineReducers({
  drinks: cocktailsReducer,
  randomCocktails: randomCocktailsReducer,
  ingredients: ingredientReducer,
  general: generalReducer,
  cache: cacheReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default () => {
  const devMode = process.env.NODE_ENV !== 'production';
  const middlewares: Middleware[] = [thunkMiddleware];

  if (devMode) {
    middlewares.push(logger);
  }

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    devMode
      ? composeWithDevTools(middleWareEnhancer)
      : middleWareEnhancer
  );

  return store;
};
