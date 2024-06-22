import { useState } from "react";
import styles from "../Styling/form.module.css";

const ServiceFormItem = ({
  text,
  onClick,
  isSelected
}: {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
        onClick && onClick();
      }}
      className={`${styles.formContainer__chooseServiceItem} ${
        selected ? styles.formContainer__chooseServiceItemSelected : ""
      }`}
    >
      {text}
    </div>
  );
};

export default ServiceFormItem;
