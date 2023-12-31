"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";

const FormModalPage = ({ color, text }: any) => {
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
        text={text ? text : "СТАТИ КЛІЄНТОМ"}
        color={color}
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
