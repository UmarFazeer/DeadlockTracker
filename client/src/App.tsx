import './App.css';
import SearchBar from './SearchBar';

function App() {

  // Receives the submitted text from searchbar. 
  function onSearch(accountId: string) {

  // Converts the string into a number
  const id = Number(accountId);

  // Checks whether the ID is a valid positive integer
  if (!Number.isSafeInteger(id) || id <= 0) {
    console.log("Invalid Steam Account ID");
    return;
  }

    console.log(accountId);
    console.log(id);

    // Sends the accountId to the backend API endpoint
    fetch(`http://localhost:3000/api/hero-stats?accountId=${id}`)
  }
  return (
    <div className="page">
      <h1>Deadlock Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;