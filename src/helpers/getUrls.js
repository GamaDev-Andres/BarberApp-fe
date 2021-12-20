const base = import.meta.env.VITE_REACT_APP_URL_BASE;
export const getUrlRefresh = () => base + "/api/refresh";

export const getUrlNewUser = () => base + "/api/users/new";
export const getUrlNewEmpleado = () => base + "/api/empleados/new";

export const getUrlLoginUser = () => base + "/api/users";
export const getUrlLoginEmpleado = () => base + "/api/empleados";

export const getUrlValidAdmin = () => base + "/api/admin";
