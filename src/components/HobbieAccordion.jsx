/* eslint-disable react/prop-types */
const HobbieAccordion = ({
  i,
  title,
  description,
  icon,
  currentOpen,
  setCurrentOpen,
}) => {
  const showText = i === currentOpen; /* revised state */

  function handleShowText() {
    setCurrentOpen(!showText ? i : null);
  }

  return (
    <div
      key={i}
      onClick={handleShowText}
      className={"flex flex-col  cursor-pointer  "}
    >
      <div
        className={`flex py-6 px-8 justify-between items-center ${
          showText ? "bg-gray-900 text-yellow-500" : "bg-gray-800"
        }`}
      >
        <p className="text-lg font-semibold ms-24">{title}</p>
        <p className="text-xl font-semibold me-6">{!showText ? "+" : "-"}</p>
      </div>

      {showText && (
        <div className="flex items-center gap-14 py-10 px-10">
          <span>{icon}</span>
          <p className="text-gray-300 text-lg lg:text-xl">{description}</p>
        </div>
      )}
    </div>
  );
};

export default HobbieAccordion;
