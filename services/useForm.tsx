import React, { ReactElement, useState } from "react";

const types: any = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "email invalido",
  },
  password: {
    regex: /^[0-9a-zA-Z$*&@#]{8,}/,
    message: "senha invalida",
    aviso: {
      senha: "senha forte com  minimo de 8 digitos",
    },
  },
};

const useForm = (type: any) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value: any) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preenchar um valor");
    } else if (value.length <= 8) {
      setError(types.password.aviso.senha);
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
    } else {
      setError("");
      return true;
    }
  };

  const onChange = ({ target }: any) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
