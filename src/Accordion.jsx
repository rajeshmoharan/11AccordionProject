/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./index.css";

function Accordion({ items }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {items.map((el, i) => (
        <AccordionItem
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
export default Accordion;
