import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText
} from "@material-ui/core";

/** Constants */
import { USER_COURSE_OPTIONS } from "../../../constants";

const Course = ({ value, onChange, error }) => (
  <FormControl component="fieldset" error={Boolean(error)}>
    <Typography variant="h5">What you would like to learn?</Typography>
    <RadioGroup
      aria-label="Course"
      name="course"
      value={value}
      onChange={onChange}
      row
    >
      {USER_COURSE_OPTIONS.map(course => (
        <FormControlLabel
          key={course.value}
          control={<Radio size="small" />}
          {...course}
          checked={Number(value) === course.value}
        />
      ))}
    </RadioGroup>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default Course;
