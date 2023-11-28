import React from "react";
import Tablex from "../../components/Tablex";
import { Formik, Form, Field, ErrorMessage } from 'formik';
function CAtegories({ data }) {
  return (
    <>
      <Tablex data={data} />
      <h2>Add Category</h2>


      <Formik
       initialValues={{ name: '', description: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } else if (
           !/^[a-zA-Z]+$/.test(values.name)
         ) {
           errors.name = 'Invalid name';
         }
         return errors;
       }}

     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <Field type="text" name="description" />
           <ErrorMessage name="description" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>



    </>
  );
}

export default CAtegories;
