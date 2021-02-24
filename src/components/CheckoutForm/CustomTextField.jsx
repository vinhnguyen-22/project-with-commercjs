import { Grid, TextField } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
        error={isError}
      />
    </Grid>
  );
};

export default FormInput;
