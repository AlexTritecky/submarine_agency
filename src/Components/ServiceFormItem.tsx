import { useState } from "react";
import styles from "../Styling/form.module.css";

const ServiceFormItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  const [selected, setSelected] = useState(false);

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
