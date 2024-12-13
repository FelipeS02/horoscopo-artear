import { SearchIcon } from 'lucide-react';
import { FC, InputHTMLAttributes, memo } from 'react';
import '@/styles/components/search.css';

const Search: FC<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> = memo(
  function Search({ className, id, placeholder, disabled, ...props }) {
    return (
      <search
        className='search__container filter-container'
        aria-disabled={disabled}
      >
        <SearchIcon size={20} id='search' />
        <input
          type='search'
          id={id ?? 'search-sign'}
          className={`search__input ${className ?? ''}`}
          disabled={disabled}
          placeholder={placeholder ?? 'ej. Capricornio'}
          {...props}
        />
      </search>
    );
  }
);

export { Search };
