import { useState, type FormEvent } from 'react';

// Defines the properties that the SearchBar component expects to receive. Which is a string 
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}
// Creates search bar 
function SearchBar({
  onSearch,
}: SearchBarProps) {

    // query stores what the user types in the search bar, setQuery updates that stored text, useState initializes query to an empty string.
  const [query, setQuery] = useState('');
  console.log(query);


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
        {/*Steam Account ID*/}
      <input
        type="text"
        placeholder={"Enter Steam Account ID"}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        required
      />

      {/*Hero Selection*/}
      <select name="hero" defaultValue="66">
        <option value="66">Victor</option>
        <option value="1">Infernus</option>
      </select>

        <button type="submit">Search</button>

    </form>
  );
}

export default SearchBar;