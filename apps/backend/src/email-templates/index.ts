import admission from "./admission";
import passwordReset from "./password-reset";
import recruiterSignup from "./recruiter-signup";
import statusUpdate from "./status-update";
import verification from "./verification";

export default {
  verification,
  "password-reset": passwordReset,
  "recruiter-signup": recruiterSignup,
  "status-update": statusUpdate,
  admission: admission,
} as Record<string, string>;
