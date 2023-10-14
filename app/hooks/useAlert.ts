import { useState, useCallback } from "react";

export default function useAlert() {
  const [showAlert, setShowAlert] = useState(false);

  const showAlertFunction = useCallback(() => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  return { showAlert, showAlertFunction };
}

