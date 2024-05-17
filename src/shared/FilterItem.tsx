import { Checkbox } from './Checkbox'

interface FilterItemProps {
  name: string
  label: string
  variants: string[]
  selected: FilterItemProps['variants']
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterItem: React.FC<FilterItemProps> = ({
  name,
  label,
  selected,
  variants,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-[16px] font-semibold text-foreground">
        {label}
      </label>
      {variants.map((variant, index) => (
        <label key={index} className="flex select-none items-center">
          <Checkbox
            name={name}
            value={variant}
            onChange={onChange}
            checked={selected.includes(variant)}
          />
          <p className="ml-[6px] text-[14px] font-medium text-foreground">
            {variant}
          </p>
        </label>
      ))}
    </div>
  )
}

export default FilterItem
