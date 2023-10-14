import alertColor from "../utils/helper";

interface alertProps {
  alertText: string;
  alertType?: string;
  alertStyles?: any;
}

export default function Alert({
  alertText,
  alertType = "info",
  alertStyles = "",
}: alertProps) {
  const alertClass = alertColor(alertType);
  return (
      <div
        className={`${alertClass} ${alertStyles} p-4 z-50 w-1/4 absolute right-4 top-4 shadow-md border-l-4 `}
        role="alert"
      >
        <p className="text-xs">{alertType}</p>
        <p>{alertText}</p>
      </div>
  );
}
