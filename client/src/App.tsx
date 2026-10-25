import './App.css';
import SearchBar from './SearchBar';

function App() {

  // Receives the submitted text from searchbar. 
  function onSearch(accountId: string, heroId: string) {
    console.log("Starting onSearch");

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
    // TODO: Log this response
    // TODO: If the response is hero stats, display them on the page (store in response state)
    // TODO: Use service from DeadlockServices.ts to fetch hero stats from the API
    let response = fetch(`http://localhost:3000/api/hero-stats?accountId=${id}&heroId=${heroId}`);
      console.log("Response from backend:", response);
    
    console.log("Completing onSearch");
  }
  return (
    <div className="page">
      <h1>Deadlock Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;