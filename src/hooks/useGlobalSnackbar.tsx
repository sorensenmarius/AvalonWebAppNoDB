import { Alert, Snackbar } from "@mui/material";
import { AlertColor } from "@mui/material";
import { createContext, FC, useState, useContext } from "react";

export const SnackbarContext = createContext({
  open: false,
  message: "",
  severity: "success" as AlertColor,
  showMessage: (
    message: string,
    severity?: AlertColor,
    duration?: number
  ) => {},
  hideMessage: () => {},
  duration: 6000,
  showErrorMessage: (message: string, duration?: number) => {},
});

const SnackbarProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [duration, setDuration] = useState(6000);

  const showMessage = (
    message: string,
    severity?: AlertColor,
    duration?: number
  ) => {
    setMessage(message);
    setSeverity(severity || "success");
    setOpen(true);
    setDuration(duration || 6000);
  };

  const showErrorMessage = (message: string, duration?: number) =>
    showMessage(message, "error", duration);

  const hideMessage = () => setOpen(false);

  const context = {
    open,
    message,
    severity,
    showMessage,
    hideMessage,
    duration,
    showErrorMessage,
  };

  return (
    <SnackbarContext.Provider value={context}>
      {children}
    </SnackbarContext.Provider>
  );
};

const GlobalSnackbar: FC = () => {
  const { open, message, severity, hideMessage, duration } =
    useGlobalSnackbar();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={duration}
      onClose={hideMessage}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

const useGlobalSnackbar = () => {
  const context = useContext(SnackbarContext);
  return context;
};

export { GlobalSnackbar, SnackbarProvider };
export default useGlobalSnackbar;
