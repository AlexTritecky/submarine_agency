import styles from "../Styling/form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
import ServiceFormItem from "./ServiceFormItem";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import Image from "next/image";
type FormValues = {
  name: string;
  number: string;
  email: string;
  company: string;
  service: string;
};
function Form({ handleFormClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      name: sessionStorage.getItem("name") || "",
      number: sessionStorage.getItem("number") || "",
      email: sessionStorage.getItem("email") || "",
      company: sessionStorage.getItem("company") || "",
      service: sessionStorage.getItem("service") || "",
    },
  });
  const defaultServices = sessionStorage.getItem("services");
  console.log(defaultServices);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultServices ? JSON.parse(defaultServices) : []
  );
  useEffect(() => {
    sessionStorage.setItem("services", JSON.stringify(selectedServices));
  }, [selectedServices]);
  useEffect(() => {
    const subscription = watch((value, name: any) => {
      sessionStorage.setItem(
        String(name.name),
        String(name.values[String(name.name)])
      );
    });

    return () => subscription.unsubscribe();
  }, [watch]);
  const selectItemHandler = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
      selectedServices.length === 1 && setValue("service", "");
      selectedServices.length === 1 &&
        setError("service", { type: "required" });
    } else {
      setValue("service", "__");
      clearErrors("service");
      setSelectedServices([...selectedServices, service]);
    }
  };
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log(data, selectedServices);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="formPopUpContainer"
      onClick={(e: any) => {
        if (e.target.id === "formPopUpContainer" || e.target.id === "back") {
          formRef.current?.classList.add(
            styles.formContainer,
            styles.formContainerClose
          );
          handleFormClose();
        }
      }}
      className={styles.formPopUpContainer}
    >
      <div id="formContainer" className={styles.formContainer} ref={formRef}>
        <div id="back" className={styles.formContainer__close} onClick={handleFormClose}>Назад</div>
        <div className={styles.formContainer__title}>РОЗКАЖІТЬ ПРО СЕБЕ</div>
        <div className={styles.formContainer__subTitle}>
          Щоб почати з нами співпрацю
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer__form}
        >
          <div className={styles.formContainer__inputContainer}>
            <div className={styles.formContainer__input}>
              <label
                htmlFor="name"
                className={`${styles.formContainer__subTitle} ${
                  errors.name ? styles.formContainer__errorMessage : ""
                }`}
              >
                Як до вас звертатись*
              </label>
              <input
                {...register("name", { required: "This field is required" })}
                className={styles.formContainer__input}
                type="text"
                name="name"
                placeholder="Олег"
              />
            </div>
            <div className={styles.formContainer__input}>
              <label
                htmlFor="number"
                className={`${styles.formContainer__subTitle} ${
                  errors.number ? styles.formContainer__errorMessage : ""
                }`}
              >
                Телефон*{" "}
              </label>
              <input
                {...register("number", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+?[0-9\s-]*$/,
                    message: "Invalid phone number format",
                  },
                })}
                className={styles.formContainer__input}
                type="number"
                name="number"
                placeholder="+380984753890"
              />
            </div>
            <div className={styles.formContainer__input}>
              <label
                htmlFor="email"
                className={`${styles.formContainer__subTitle} ${
                  errors.email ? styles.formContainer__errorMessage : ""
                }`}
              >
                Email*{" "}
              </label>
              <input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className={styles.formContainer__input}
                type="email"
                name="email"
                placeholder="www@gmail.com"
              />
            </div>
            <div className={styles.formContainer__input}>
              <label
                htmlFor="company"
                className={`${styles.formContainer__subTitle} ${
                  errors.company ? styles.formContainer__errorMessage : ""
                }`}
              >
                Назва компанії *{" "}
              </label>
              <input
                {...register("company", { required: "This field is required" })}
                className={styles.formContainer__input}
                type="text"
                name="company"
                placeholder="Назва компанії"
              />
              <input
                {...register("service", { required: "This field is required" })}
                className={styles.formContainer__serviceInput}
                type="text"
                name="service"
              />
            </div>
          </div>

          <div
            className={`${styles.formContainer__title} ${
              errors.service
                ? styles.formContainer__errorMessage
                : ""
            } `}
          >
            ОБЕРІТЬ ПОСЛУГИ
          </div>
          <div className={styles.formContainer__subTitle}>
            Які вас цікавлять
          </div>
          <div className={styles.formContainer__chooseServiceItems}>
            <ServiceFormItem
              onClick={() => selectItemHandler("Візуал")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("Візуал")}
              text="Візуал"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Айдентика")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("Айдентика")}
              text="Айдентика"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("SMM-стратегія")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("SMM-стратегія")}
              text="SMM-стратегія"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Комунікаційна стратегія")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("Комунікаційна стратегія")}
              text="Комунікаційна стратегія"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("S_MM")}
              isSelected={sessionStorage.getItem("services")?.includes("S_MM")}
              text="SMM"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Дизайн та веб-розробка сайту")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("Дизайн та веб-розробка сайту")}
              text="Дизайн та веб-розробка сайту"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Консультація")}
              isSelected={sessionStorage
                .getItem("services")
                ?.includes("Консультація")}
              text="Консультація"
            />
          </div>
          <div className={styles.formContainer__textarea}>
            <label htmlFor="message" className={styles.formContainer__subTitle}>
              Розкажіть нам більше про свій проект
            </label>
            <textarea
              className={styles.formContainer__textarea}
              name="message"
              placeholder="Додаткова інформація"
            ></textarea>
          </div>
          {Object.keys(errors).length > 0 && (
            <div className={styles.formContainer__errorMainMessage}>
              Заповніть усі обов’язкові поля*
            </div>
          )}
          <div className={styles.formContainer__buttonContainer}>
            <Button
              onClick={handleSubmit(onSubmit)}
              type={PLUS_BUTTON_TYPE}
              text="Надіслати"
              color={VIOLET}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
export default Form;
