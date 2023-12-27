import styles from "../Styling/form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Button, { PLUS_BUTTON_TYPE, VIOLET } from "./Button";
import ServiceFormItem from "./ServiceFormItem";
import { useState } from "react";
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
  } = useForm<FormValues>();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const selectItemHandler = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
      console.log(selectedServices);
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
  const parentElement = document.getElementById("formPopUpContainer");
  const childElement = document.getElementById("formContainer");

  return (
    <section
      id="formPopUpContainer"
      onClick={(e) => {
        if (e.target === parentElement) {
          childElement!.classList.add(
            styles.formContainer,
            styles.formContainerClose
          );
          handleFormClose();
        }
      }}
      className={styles.formPopUpContainer}
    >
      <div
        id="formContainer"
        className={styles.formContainer}
      >
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
                {...register("number", { required: "This field is required" })}
                className={styles.formContainer__input}
                type="text"
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
                {...register("email", { required: "This field is required" })}
                className={styles.formContainer__input}
                type="text"
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

          <div className={styles.formContainer__title}>ОБЕРІТЬ ПОСЛУГИ</div>
          <div className={styles.formContainer__subTitle}>
            Які вас цікавлять
          </div>
          <div className={styles.formContainer__chooseServiceItems}>
            <ServiceFormItem
              onClick={() => selectItemHandler("Візуал")}
              text="Візуал"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Айдентика")}
              text="Айдентика"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("SMM-стратегія")}
              text="SMM-стратегія"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Комунікаційна стратегія")}
              text="Комунікаційна стратегія"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Дизайн та веб-розробка сайту")}
              text="SMM"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Дизайн та веб-розробка сайту")}
              text="Дизайн та веб-розробка сайту"
            />
            <ServiceFormItem
              onClick={() => selectItemHandler("Консультація")}
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
