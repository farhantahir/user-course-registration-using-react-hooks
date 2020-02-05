import React, { useMemo } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  FormHelperText
} from "@material-ui/core";

/** Constants */
import { SUBJECT_COURSE_OPTIONS_MAPPING } from "../../../constants";

const Subject = ({ value, selectedCourse, onChange, error }) => {
  const options = useMemo(
    () => SUBJECT_COURSE_OPTIONS_MAPPING[selectedCourse] || [],
    [selectedCourse]
  );

  return (
    <FormControl error={Boolean(error)}>
      <Typography variant="h5">
        Pick a subject you are interested in:{" "}
      </Typography>
      <Select name="subject" value={value} onChange={onChange}>
        {options.map(o => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Subject;
