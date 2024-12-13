import { ArrowDownAZ, Calendar } from 'lucide-react';
import { FC, memo, useCallback } from 'react';
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectSeparator,
  SelectLabel,
  SelectGroup,
  SelectContent,
} from './Select';
import { SortField, SortOrder, SortPayload } from '@/models/signsSort';
import { SortPayloadSchema } from '@/validators/sortPayload';
import { initialSignsOrder } from '@/store/signsSlice';

type ListOrderSelectorProps = {
  value?: SortPayload;
  onChange?: (order: SortPayload) => void;
  disabled?: boolean;
};

const makeValue = (field: SortField, order: SortOrder) => `${field}-${order}`;

const ListOrderSelector: FC<ListOrderSelectorProps> = memo(
  function ListOrderSelector({ onChange, value, disabled }) {
    const handleValueChange = useCallback(
      (newOrder: string): void => {
        if (!onChange) return;
        try {
          const [field, order] = newOrder.split('-');

          // Validate payload, if invalid throw
          const payload = SortPayloadSchema.parse({
            field,
            order,
          });

          onChange(payload);
        } catch (e) {
          const { message } = e as Error;

          console.log(message);
        }
      },
      [onChange]
    );

    const defaultValue = makeValue(
      initialSignsOrder.field,
      initialSignsOrder.order
    );

    const stringValue = value
      ? makeValue(value.field, value.order)
      : defaultValue;

    return (
      <Select
        value={stringValue}
        onValueChange={handleValueChange}
        disabled={disabled}
      >
        <SelectTrigger className='order-selector__trigger filter-container'>
          Ordenar por
        </SelectTrigger>

        <SelectContent position='popper'>
          <SelectGroup>
            <SelectLabel>
              Fecha <Calendar />
            </SelectLabel>
            <SelectItem value={makeValue(SortField.date, SortOrder.asc)}>
              Ascendente
            </SelectItem>
            <SelectItem value={makeValue(SortField.date, SortOrder.desc)}>
              Descendente
            </SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>
              Nombre <ArrowDownAZ />
            </SelectLabel>
            <SelectItem
              value={makeValue(SortField.alphabetical, SortOrder.asc)}
            >
              Ascendente
            </SelectItem>
            <SelectItem
              value={makeValue(SortField.alphabetical, SortOrder.desc)}
            >
              Descendente
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

export { ListOrderSelector };
