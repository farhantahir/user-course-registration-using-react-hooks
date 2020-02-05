import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
  Snackbar
} from "@material-ui/core";
import Send from "@material-ui/icons/Send";
import Alert from "@material-ui/lab/Alert";
import * as Yup from "yup";
import moment from "moment";

/** Components */
import Course from "./course";
import Subject from "./subject";
import StartDate from "./start-date";
import AdditionalNotes from "./additional-notes";

let timeout;

const UserRegisteration = () => {
  /** States */
  const [success, setSuccess] = useState(false);

  /** Methods */
  const onSubmit = (values, { setSubmitting }) => {
    timeout && clearTimeout(timeout);
    setSubmitting(true);
    timeout = setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 3000);
  };

  /** Effects */
  useEffect(() => timeout && clearTimeout(timeout), []);

  const validDates = [
    "20 December, 2019",
    "15 January, 2020",
    "1 February, 2020"
  ];
  const validationSchema = Yup.object().shape({
    course: Yup.string().required("Course Required!"),
    subject: Yup.string().required("Please select a subject!"),
    startDate: Yup.date()
      .required("You must specificy a start date")
      .test(
        "startDate",
        "Your selected course and subject is not offered beginning from your selected date",
        value => validDates.includes(moment(value).format("D MMMM, YYYY"))
      ),
    additionalNotes: Yup.string()
      .min(20, "Too Short!")
      .max(500, "Too Long!")
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center">
        Course Registration
      </Typography>
      <br />
      <Formik
        initialValues={{
          course: 1,
          subject: "",
          startDate: moment(),
          additionalNotes: ""
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Course
              value={values.course}
              onChange={e => {
                handleChange(e);
                setFieldValue("subject", "");
              }}
              error={errors.course}
            />
            <br />
            <br />
            <Subject
              value={values.subject}
              selectedCourse={values.course}
              onChange={handleChange}
              error={errors.subject}
            />
            <br />
            <br />
            <StartDate
              selectedDate={values.startDate}
              onChange={val => setFieldValue("startDate", val)}
              error={errors.startDate}
            />
            <br />
            <br />
            <AdditionalNotes
              notes={values.additionalNotes}
              onChange={handleChange}
              error={errors.additionalNotes}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              size="large"
              {...(!isSubmitting && { startIcon: <Send /> })}
              type="submit"
            >
              {isSubmitting ? (
                <CircularProgress color="inherit" size={30} />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        )}
      </Formik>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Your course has been successfully registered.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserRegisteration;
