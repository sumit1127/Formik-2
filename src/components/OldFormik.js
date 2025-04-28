import "../styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  city: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  //values contain three properties name, email,city and
  // err obj should be similar to that values obj
  //errors.name, errors.email, errors.city
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!values.email.includes("@")) {
    errors.email = "Invalid email";
  }

  if (!values.city) {
    errors.city = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email").required("Required!"),
  city: Yup.string().required("Required!"),
});

const OldFormik = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  // console.log("Form errors", formik.errors);
  console.log("visited fields", formik.touched);
  //touched object gives information whether field visited or not

  return (
    <form className="formik" onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="err">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="err">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-control">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="err">{formik.errors.city}</div>
        ) : null}
      </div>

      <button type="submit">submit</button>
    </form>
  );
};

export default OldFormik;
