import { ChangeEvent } from "react";
import { data } from "../../utils/data";
import { Currency } from "../../utils/types";
import * as Styles from "./styles";

interface Props {
  value: Currency;
  otherCurrencyAcronym: string;
  setValue: (currency: Currency) => void;
  disabled: boolean;
}

interface OptionProps {
  id: number;
  name: string;
  acronym: string;
}

const Select = ({ value, otherCurrencyAcronym, setValue, disabled }: Props) => {
  const selectCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const currency = data.find(
      (element) => element.id === parseInt(event.target.value)
    );
    setValue(currency!);
  };

  const Option = ({ id, name, acronym }: OptionProps) => {
    return (
      <option value={id} selected={id === value.id ? true : false}>
        {name} - {acronym}
      </option>
    );
  };

  return (
    <Styles.Container onChange={selectCurrency} disabled={disabled}>
      {data.map((item) => {
        if (item.acronym != otherCurrencyAcronym) {
          return (
            <Option
              key={item.id}
              id={item.id}
              name={item.name}
              acronym={item.acronym}
            />
          );
        }
      })}
    </Styles.Container>
  );
};

export default Select;
