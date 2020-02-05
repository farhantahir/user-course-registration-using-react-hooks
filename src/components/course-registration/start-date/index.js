import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { FormControl, Typography, FormHelperText } from "@material-ui/core";

const StartDate = ({ selectedDate, onChange, error }) => (
  <FormControl error={Boolean(error)}>
    <Typography variant="h5">Pick the start Date: </Typography>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        name="startDate"
        value={selectedDate}
        onChange={onChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default StartDate;
