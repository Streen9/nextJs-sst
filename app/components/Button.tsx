interface buttonPropTypes {
  buttonName: String;
  buttonStyles?: any;
  onClick: () => any;
}

export default function Button({
  buttonName,
  buttonStyles = "",
  onClick,
}: buttonPropTypes) {
  return (
    <button
      className={`${buttonStyles} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
