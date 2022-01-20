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
};
export const validateCita = {
  barbero: {
    required: {
      value: true,
      message: "El barbero es requerido",
    },
  },
  hora: {
    required: {
      value: true,
      message: "La hora es requerida",
    },
  },
  fecha: {
    required: {
      value: true,
      message: "La fecha es requerida",
    },
  },
  observaciones: {
    required: {
      value: true,
      message: "Las observaciones son requerida",
    },
    maxLength: {
      value: 254,
      message: "maximo 254 caracteres",
    },
  },
};
