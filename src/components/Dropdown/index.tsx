import * as s from "./styles";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function Dropdown({ options, value, onChange }: Props) {
  return (
    <s.StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value) ?? ""}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{
            textAlign: "center",
          }}
        >
          {option.label}
        </option>
      ))}
    </s.StyledSelect>
  );
}
