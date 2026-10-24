import './App.css';
import SearchBar from './SearchBar';

function App() {

  // Receives the submitted text from searchbar. 
  function onSearch(query: string) {
    console.log(query);
  }
  return (
    <div className="page">
      <h1>Deadlock Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;