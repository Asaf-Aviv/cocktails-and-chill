import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import CocktailsByAlcohol from '../CocktailsByAlcohol';
import CocktailsByCategory from '../CocktailsByCategory';
import CocktailsByGlass from '../CocktailsByGlass';
import CocktailsByName from '../CocktailsByName';
import CocktailsByIngredient from '../CocktailsByIngredient';
import Categories from '../Categories';
import Ingredients from '../Ingredients';
import Glasses from '../Glasses';
import Cocktail from '../Cocktail';
import RandomCocktails from '../RandomCocktails';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categories" component={Categories} />
    <Route path="/glasses" component={Glasses} />
    <Route path="/ingredients" component={Ingredients} />
    <Route path="/random" component={RandomCocktails} />
    <Route path="/alcohol/:alcohol" component={CocktailsByAlcohol} />
    <Route path="/name/:name" component={CocktailsByName} />
    <Route path="/ingredient/:ingredient" component={CocktailsByIngredient} />
    <Route path="/category/:category*" component={CocktailsByCategory} />
    <Route path="/glass/:glass*" component={CocktailsByGlass} />
    <Route path="/cocktail/:cocktailId" component={Cocktail} />
  </Switch>
);

export default Routes;
