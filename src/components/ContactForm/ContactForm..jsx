import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  contactName: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.contactName,
      number: values.number,
    });

    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="contactName"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="contactName" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            // placeholder="123-45-67"
          />
          <ErrorMessage className={css.error} name="number" as="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
