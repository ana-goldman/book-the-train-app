import { useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";

const SearchItem = ({ setCollabs, placeholder }) => {
  const [query, setQuery] = useState("");

  const animatedComponents = makeAnimated();

  const loadOptions = async () => {
    if (query) {
      return await fetch(`https://fe-diplom.herokuapp.com/routes/cities?name=${query}`)
      .then( response => response.json())
    }
  };

  return (
    <>
      <AsyncSelect
        placeholder={placeholder}
        cacheOptions
        components={animatedComponents}
        getOptionLabel={(data) => data.name}
        getOptionValue={(data) => data._id}
        loadOptions={loadOptions}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => setCollabs(value)}
        className="search-form-place place-form"
      />
    </>
  );
};

export default SearchItem;