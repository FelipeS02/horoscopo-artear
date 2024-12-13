import {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  memo,
  SetStateAction,
} from 'react';
import { Columns2, Rows2 } from 'lucide-react';
import { SignsListProps } from './SignsList';
import '@/styles/components/list-view-selector.css';

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Toggle: FC<ToggleProps> = ({ selected = false, children, ...props }) => (
  <button className='view-selector__toggle' data-selected={selected} {...props}>
    {children}
  </button>
);

export interface ViewSelectorProps {
  view: SignsListProps['view'];
  setView?: Dispatch<SetStateAction<SignsListProps['view']>>;
  disabled?: boolean;
}

const ListViewSelector: FC<ViewSelectorProps> = memo(function ListViewSelector({
  view,
  setView = () => undefined,
  disabled,
}) {
  return (
    <div className='view-selector__container'>
      <label htmlFor='view-selector'>Ver como</label>
      <div
        className='view-selector__options filter-container'
        id='view-selector'
        data-view={view}
        aria-disabled={disabled}
      >
        <span className='sr-only'>Switch view</span>
        <Toggle
          selected={view === 'grid'}
          onClick={() => setView('grid')}
          title='Grilla'
          disabled={disabled}
        >
          <Columns2 size={18} />
        </Toggle>
        <Toggle
          selected={view === 'list'}
          onClick={() => setView('list')}
          title='Lista'
          disabled={disabled}
        >
          <Rows2 size={18} />
        </Toggle>
      </div>
    </div>
  );
});

export { ListViewSelector };
