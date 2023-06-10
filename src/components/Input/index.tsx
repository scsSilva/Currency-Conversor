import { InputHTMLAttributes } from "react";
import * as Styles from "./styles";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <Styles.Container defaultValue={0} {...rest} />;
};

export default Input;
