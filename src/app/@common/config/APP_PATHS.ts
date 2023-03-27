const BASEURL = "/";

export const APP_PATHS = {
  ROOT: BASEURL,

  /** TEMPLATE */
  TEMPLATE: `${BASEURL}template`,

  /** system-config */
  SYSTEM_CONFIG: `${BASEURL}system-config`,

  /** user-config */
  USER_CONFIG: `${BASEURL}user-config`,

  /** zero-material-ui */
  MATERIAL_UI: `${BASEURL}material-ui`,

  /** COUNTER */
  COUNTER: `${BASEURL}counter`,

  /** sign-in */
  SIGNIN: `${BASEURL}sign-in`,

  /** sign-up */
  SIGNUP: `${BASEURL}sign-up`,

  /** main-menu */
  MAINMENU: `${BASEURL}main-menu`,

  /** mobile */
  MOBILE: `${BASEURL}mobile`,
} as const;
