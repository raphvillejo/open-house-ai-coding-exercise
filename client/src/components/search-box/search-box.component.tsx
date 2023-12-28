type SearchInputProps = {
  searchTerm: string;
  onSearchTermChange: (newTerm: string) => void;
  onSearch: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const SearchBox: React.FC<SearchInputProps> = ({
  searchTerm,
  onSearchTermChange,
  onKeyDown,
  placeholder,
}) => {
  return (
    <input
      type='text'
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      onKeyDown={onKeyDown}
      className='px-1 border-2 border-gray-300 rounded-md'
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
