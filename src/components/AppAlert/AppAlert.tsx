import React, {useState} from "react";
import Alert from '@mui/material/Alert';
import {AlertTitle, Snackbar} from "@mui/material";

interface Props {
  status?: number
  message: any
}

export const AppAlert = ({message, status}: Props) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <Snackbar open={isShow} autoHideDuration={3000} onClose={handleClose}>
      {status === 200 ? (<Alert severity="success" onClose={handleClose}>
        <AlertTitle>Success</AlertTitle>
        {message.message}
      </Alert>) : (<Alert severity="error" onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>
        {message.message}
      </Alert>)}
    </Snackbar>
  );
}
