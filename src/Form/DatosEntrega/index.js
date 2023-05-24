import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {

  const [address, setAddress] = useState({ value: '', valid: null })
  const [city, setCity] = useState({ value: '', valid: null })
  const [province, setProvince] = useState({ value: '', valid: null })


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
        updateStep(3);
        console.log({address, city, province})
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange = {(input) => {
          const address = input.target.value;
          const valid = validarInput(address);
          setAddress({value: address , valid: valid});
        }}
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa al menos 4 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange = {(input) => {
          const city = input.target.value;
          const valid = validarInput(city);
          setCity({value: city , valid: valid});
        }}
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa al menos 4 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange = {(input) => {
          const province = input.target.value;
          const valid = validarInput(province);
          setProvince({value: province , valid: valid});
        }}
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa al menos 4 caracteres"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
