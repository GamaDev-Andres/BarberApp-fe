export const validateSesion = {
  email: {
    required: {
      value: true,
      message: "El email es requerido",
    },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Formato incorrecto",
    },
  },
  nombre: {
    required: {
      value: true,
      message: "El nombre es requerido",
    },
    minLength: {
      value: 4,
      message: "El nombre debe tener minimo 6 caracteres",
    },
    maxLength: {
      value: 50,
      message: "El nombre es demasiado largo",
    },
  },
  password: {
    required: {
      value: true,
      message: "La contraseña es requerida",
    },
    minLength: {
      value: 6,
      message: "La contraseña debe tener minimo 6 caracteres",
    },
    maxLength: {
      value: 50,
      message: "la contraseña es demasiado larga",
    },
  },
  confirmPassword: {
    validate: (value) =>
      value === password.current || "Las contraseñas no coinciden",
  },
};
