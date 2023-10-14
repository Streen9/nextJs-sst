export default function alertColor(alertType: string) {
  const colorClasses: { [key: string]: string } = {
    Info: "bg-orange-100 border-orange-500 text-orange-700",
    Success: "bg-green-100 border-green-500 text-green-700",
    Failure: "bg-red-100 border-red-500 text-red-700",
    Warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  };
  return colorClasses[alertType] || colorClasses.Info;
}
