
import { useState, type FormEvent } from 'react';

// ==================================================
// 1. PROPS - Defines what SearchBar receives
// ==================================================

interface SearchBarProps {
  onSearch: (accountId: string, heroId: string) => void;
}


// ==================================================
// 2. SEARCH BAR COMPONENT
// ==================================================

function SearchBar({ onSearch }: SearchBarProps) {

  // Stores what the user types in the search bar
  const [query, setQuery] = useState('');
  const [heroId, setHeroId] = useState('69');

  console.log(query);


  // --------------------------------------------------
  // 3. STEAM ID CONVERSION
  // --------------------------------------------------

  // Converts the 17-digit SteamID64 to an Account ID
  function convertSteamId(steamId: string) {
    // TODO: Put conversion numnber into constant
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
    // TODO: Put upper range in constant
    if (!Number.isInteger(accountId) || accountId <= 0 || accountId > 4294967295) {
      console.log("Invalid Steam ID");
      return;
    }

    // Passes the Account ID to App.tsx
    onSearch(String(accountId), heroId);
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
      <select name="hero" value={heroId} onChange={(event) => setHeroId(event.target.value)}>
        <option value="6">Abrams</option>
        <option value="77">Apollo</option>
        <option value="88">Baba</option>
        <option value="15">Bebop</option>
        <option value="72">Billy</option>
        <option value="16">Calico</option>
        <option value="81">Celeste</option>
        <option value="78">Deadman Danny</option>
        <option value="64">Drifter</option>
        <option value="11">Dynamo</option>
        <option value="76">Graves</option>
        <option value="17">Grey Talon</option>
        <option value="13">Haze</option>
        <option value="14">Holliday</option>
        <option value="1">Infernus</option>
        <option value="20">Ivy</option>
        <option value="12">Kelvin</option>
        <option value="4">Lady Geist</option>
        <option value="31">Lash</option>
        <option value="8">McGinnis</option>
        <option value="63">Mina</option>
        <option value="52">Mirage</option>
        <option value="18">Mo & Krill</option>
        <option value="87">Nurse Harrow</option>
        <option value="67">Paige</option>
        <option value="10">Paradox</option>
        <option value="50">Pocket</option>
        <option value="84">Rat King</option>
        <option value="79">Rem</option>
        <option value="2">Seven</option>
        <option value="19">Shiv</option>
        <option value="80">Silver</option>
        <option value="60">Sinclair</option>
        <option value="85">Solomon</option>
        <option value="69">The Doorman</option>
        <option value="65">Venator</option>
        <option value="66">Victor</option>
        <option value="3">Vindicta</option>
        <option value="86">Violet</option>
        <option value="35">Viscous</option>
        <option value="58">Vyper</option>
        <option value="25">Warden</option>
        <option value="7">Wraith</option>
        <option value="27">Yamato</option>

      </select>

      <button type="submit">Search</button>

    </form>
  );
}

export default SearchBar;
