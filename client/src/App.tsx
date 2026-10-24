import './App.css';
import SearchBar from './SearchBar';

function App() {

  // Receives the submitted text from searchbar. 
  function onSearch(accountId: string, heroId: string) {

  // Converts the string into a number
  const id = Number(accountId);

  // Checks whether the ID is a valid positive integer
  if (!Number.isSafeInteger(id) || id <= 0) {
    console.log("Invalid Steam Account ID");
    return;
  }

    console.log("Account ID:", accountId);
    console.log("Hero ID:", heroId);

    // Sends the accountId and heroId to the backend API endpoint
    fetch(`http://localhost:3000/api/hero-stats?accountId=${id}&heroId=${heroId}`);
  }
  return (
    <div className="page">
      <h1>Deadlock Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;