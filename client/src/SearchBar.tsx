
import { useState, type FormEvent } from 'react';

// ==================================================
// 1. PROPS - Defines what SearchBar receives
// ==================================================

interface SearchBarProps {
  onSearch: (query: string) => void;
}


// ==================================================
// 2. SEARCH BAR COMPONENT
// ==================================================

function SearchBar({ onSearch }: SearchBarProps) {

  // Stores what the user types in the search bar
  const [query, setQuery] = useState('');

  console.log(query);


  // --------------------------------------------------
  // 3. STEAM ID CONVERSION
  // --------------------------------------------------

  // Converts the 17-digit SteamID64 to an Account ID
  function convertSteamId(steamId: string) {
    const accountId = BigInt(steamId) - 76561197960265728n;
    return Number(accountId);
  }


  // --------------------------------------------------
  // 4. FORM SUBMISSION
  // --------------------------------------------------

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Gets the SteamID64 entered by the user
    const steamId = query.trim();

    // Checks if the Steam ID contains 17 digits
    if (!/^\d{17}$/.test(steamId)) {
      console.log("Invalid Steam ID");
      return;
    }

    // Converts SteamID64 to Account ID
    const accountId = convertSteamId(steamId);

    // Checks if the Account ID is within the valid range
    if (!Number.isInteger(accountId) || accountId <= 0 || accountId > 4294967295) {
      console.log("Invalid Steam ID");
      return;
    }

    // Passes the Account ID to App.tsx
    onSearch(String(accountId));
  }


  // ==================================================
  // 5. FORM - What the user sees on the website
  // ==================================================

  return (
    <form onSubmit={handleSubmit}>

      {/* Steam Account ID */}
      <input
        type="text"
        placeholder={"Enter 17 digit SteamID64"}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        required
      />

      {/* Hero Selection */}
      <select name="hero" defaultValue="66">
        <option value="66">Victor</option>
        <option value="1">Infernus</option>
      </select>

      <button type="submit">Search</button>

    </form>
  );
}

export default SearchBar;
