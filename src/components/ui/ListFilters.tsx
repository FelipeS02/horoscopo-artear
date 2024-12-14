import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { sortList, searchSigns } from '@/store/signsSlice';
import { useDebounceCallback } from '@/hooks/useDebounceCallback';
import { ListViewSelector, ViewSelectorProps } from './ListViewSelector';
import { ListOrderSelector } from './ListOrderSelector';
import { Search } from './Search';
import '@/styles/components/list-filters.css';

interface ListFiltersProps extends ViewSelectorProps {
  disabled?: boolean;
}

const ListFilters: FC<ListFiltersProps> = ({ view, setView, disabled }) => {
  const dispatch = useAppDispatch();
  const { order: storeOrder } = useAppSelector((state) => state);

  const debouncedQuery = useDebounceCallback(
    (newQuery: string) => dispatch(searchSigns(newQuery)),
    250
  );

  return (
    <div className='list-filters__container'>
      <div className='section-content list-filters__inner'>
        <div className='list-filters__options'>
          <ListViewSelector view={view} setView={setView} disabled={disabled} />
          <ListOrderSelector
            value={storeOrder}
            onChange={(payload) => dispatch(sortList(payload))}
            disabled={disabled}
          />
        </div>
        <Search
          disabled={disabled}
          onChange={(e) => {
            const newQuery = e.target.value;
            debouncedQuery(newQuery);
          }}
        />
      </div>
    </div>
  );
};

export { ListFilters };
