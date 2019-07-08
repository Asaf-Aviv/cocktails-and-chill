import { combineReducers, createStore, applyMiddleware } from 'redux';
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
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
};
