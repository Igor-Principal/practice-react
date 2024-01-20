import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { FormBtn, InputSearch, SearchFormStyled } from "./SearchForm.styled";

export const SearchForm = ({ onSubmit }) => {
  const [options, setOptions] = useState("");

  const onChange = (e) => {
    setOptions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!options.trim()) return;
    onSubmit(options);
    setOptions("");
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        value={options}
        onChange={onChange}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
