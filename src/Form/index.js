import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//Validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/Validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    console.log("UseEffect")
  });

  useEffect(() => {
    console.log("Se ha actualizado el step: ", step)
  }, [step]);

  // useEffect(async () => {
  //   try {
  //     const data = await fetch ("http://jsonplaceholder.typicode.com/posts");
  //     const post = await data.json();
  //     console.log(posts;
  //     } catch (e) {
  //       console.log(e);
  //     }
  // });

  // step = 0 ---> <DatosUsuario />
  // step = 1 ---> <DatosPersonales />
  // step = 2 ---> <DatosEntrega />
  // step = 3 ---> <Complete />

  const updateStep = (step) => {
    console.log("actualizar paso", step);
    setStep(step)
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete updateStep={updateStep} />,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep)
  };

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid);
    console.log("position", position);
    console.log("currentStep", currentStep);
    console.log("validator", validator);
  }

  const stepFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido.",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña válida. Al menos 8 caracteres y máximo 20 caracteres.",
          validator: validarPassword,
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={ stepFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
