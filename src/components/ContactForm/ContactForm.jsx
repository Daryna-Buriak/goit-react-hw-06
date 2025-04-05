import css from "./ContactForm.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(3, "Must be min 3 characters")
    .max(50),
  number: Yup.string()
    .required("This field is required")
    .min(3, "Must be min 3 characters")
    .max(50),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const telFieldId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          ...values,
          id: crypto.randomUUID(),
        };

        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="nameFieldId">Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.field}
        ></Field>
        <ErrorMessage name="name" component="div" className={css.error} />
        <label htmlFor="telFieldId">Number</label>
        <Field
          type="tel"
          name="number"
          id={telFieldId}
          className={css.field}
        ></Field>
        <ErrorMessage name="number" component="div" className={css.error} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
