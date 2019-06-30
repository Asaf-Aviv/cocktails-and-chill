import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { AppState } from './store';
import { CocktailsState } from './store/cocktails/types';
import { getCocktailsByName } from './store/cocktails/actions';
import { getRandomCocktails } from './store/randomCocktails/actions';

interface AppProps {
  drinks: CocktailsState;
  getCocktailsByName: (name: string) => void;
  getRandomCocktails: () => void;
}

const App: React.FC<AppProps> = ({
  drinks,
  getCocktailsByName,
  getRandomCocktails,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getRandomCocktails();
  }, []);

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
      <header className="App-header">
        <h1>How About a Drink ?</h1>
      </header>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  drinks: state.drinks,
});

export default connect(mapStateToProps,{
  getCocktailsByName, getRandomCocktails,
})(hot(App));
