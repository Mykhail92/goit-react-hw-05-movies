import { useSearchParams } from 'react-router-dom';
import { StyledBtn, StyledForm, StyledInput } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setSearchParams('');
  };

  return (
    <StyledForm onSubmit={hendleSubmit}>
      <StyledInput
        type="text"
        value={query}
        onChange={e => {
          updateQueryString(e.target.value);
        }}
      />
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};
