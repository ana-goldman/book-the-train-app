import { useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { searchActions } from '../../redux/searchSlice';
import { useSelector, useDispatch } from "react-redux";

const SearchItem = ({ type }) => {
  const [query, setQuery] = useState("");
  const { cityFrom, cityTo } = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();

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
        className="search-form-place"
        placeholder={type === 'from' ? 'Откуда' : 'Куда'}
        value={type === 'from' ? cityFrom : cityTo}
        cacheOptions
        components={animatedComponents}
        getOptionLabel={(data) => data.name}
        getOptionValue={(data) => data._id}
        loadOptions={loadOptions}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => type === 'from' ? dispatch(searchActions.setFrom(value)) : dispatch(searchActions.setTo(value))}
      />
    </>
  );
};

export default SearchItem;