import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { AppState } from './store';
import { CocktailsState } from './store/cocktails/types';
import { getCocktailsByName } from './store/cocktails/actions';
import { fetchRandomCocktails } from './store/randomCocktails/actions';

interface AppProps {
  drinks: CocktailsState;
  getCocktailsByName: (name: string) => void;
  fetchRandomCocktails: () => void;
}

const App: React.FC<AppProps> = ({
  drinks,
  getCocktailsByName,
  fetchRandomCocktails,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetchRandomCocktails();
  }, [fetchRandomCocktails]);

  const getCocktails = () => {
    getCocktailsByName(name);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      getCocktails();
    }
  };

  return(
    <div className="App">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
      />
      <button
        type="button"
        onClick={getCocktails}
      >
        Search
      </button>
      <button type="button" onClick={fetchRandomCocktails}>Random</button>
      <header className="App-header">
        <h1>How About a Drink ?</h1>
      </header>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  drinks: state.drinks,
});

export default connect(mapStateToProps, {
  getCocktailsByName,
  fetchRandomCocktails,
})(hot(App));
