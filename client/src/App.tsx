import './App.css';
import SearchBar from './SearchBar';

function App() {

  // Receives the submitted text from searchbar. 
  function onSearch(accountId: string) {

  // Converts the string into a number
  const id = Number(accountId);

    console.log(accountId);
    console.log(id);
  }
  return (
    <div className="page">
      <h1>Deadlock Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;