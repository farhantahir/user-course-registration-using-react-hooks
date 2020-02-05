import React from "react";

import {
  FormControl,
  Typography,
  TextField,
  FormHelperText
} from "@material-ui/core";

const AdditionalNotes = ({ notes, onChange, error }) => (
  <FormControl fullWidth error={Boolean(error)}>
    <Typography variant="h5">
      Additional Notes{" "}
      <Typography display="inline" variant="caption">
        (Optional)
      </Typography>
    </Typography>
    <TextField
      value={notes}
      onChange={onChange}
      name="additionalNotes"
      multiline
      rows="5"
      variant="outlined"
      fullWidth
    />
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default AdditionalNotes;
