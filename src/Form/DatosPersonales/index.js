import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";


const DatosPersonales = ({ updateStep}) => {

  const [name, setName] = useState({ value: '', valid: null })
  const [lastName, setLastName] = useState({ value: '', valid: null })
  const [phone, setPhone] = useState({ value: '', valid: null })

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit= {(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange = {(input) => {
          const name = input.target.value;
          const valid = validarNombre(name);
          setName({value: name , valid: valid});
          console.log (name, valid);
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange = {(input) => {
          const lastName = input.target.value;
          const valid = validarApellido(lastName);
          setLastName({value: lastName , valid: valid});
          console.log (lastName, valid);
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange = {(input) => {
          const phone = input.target.value;
          const valid = validarTelefono(phone);
          setPhone({value: phone , valid: valid});
          console.log (phone, valid);
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
