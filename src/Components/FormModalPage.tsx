import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";

const FormModalPage = () => {
  const [isPortalVisible, setPortalVisible] = useState(false);
  useEffect(() => {
    if (isPortalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isPortalVisible]);
  const handleFormClose = () => {
    setTimeout(() => {
      setPortalVisible(false);
    }, 500);
  };
  return (
    <>
      <Button
        onClick={() => {
          setPortalVisible(true);
        }}
        text="СТАТИ КЛІЄНТОМ"
        color={VIOLET}
        type={PLUS_BUTTON_TYPE}
      />
      {isPortalVisible &&
        createPortal(
          <Form
            isPortalVisible={isPortalVisible}
            handleFormClose={handleFormClose}
          />,
          document.body
        )}
    </>
  );
};

export default FormModalPage;
