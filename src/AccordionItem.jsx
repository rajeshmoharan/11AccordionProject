/* eslint-disable react/prop-types */
import "./index.css";

function AccordionItem({ title, num,curOpen,onOpen,children }) {

  const isOpen = num === curOpen;

  const handleClicked = () => {
    onOpen(isOpen ? null : num)
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClicked}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default AccordionItem;
