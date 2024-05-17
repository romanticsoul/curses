interface Props {
  value: string | undefined
  setValue: (value: string | undefined) => void
  label: string
  variants: string[]
}

const FilterItem: React.FC<Props> = ({ value, setValue, label, variants }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-[16px] font-[600] text-foreground">{label}</label>
      {variants.map((item, index) => (
        <div key={index} className="flex">
          <input
            type="checkbox"
            id="cost"
            name="cost"
            value={item}
            checked={value === item}
            onChange={() => {
              if (value === item) {
                setValue(undefined)
              } else {
                setValue(item)
              }
            }}
          />
          <label className="ml-[6px] text-[14px] text-foreground">{item}</label>
        </div>
      ))}
    </div>
  )
}

export default FilterItem
