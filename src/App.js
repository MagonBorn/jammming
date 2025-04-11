import './App.css';
import SearchBarContainer from './components/searchbar/SearchBarContainer'
import SearchResultsContainer from '/.components/searchResults/searchResultsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer/>
      </header>
    </div>
  );
}

export default App;
