import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'; // https://github.com/springload/react-accessible-accordion
import "./styles.css";
// import { products } from "../../utils/data";

const Accordion = ({value}) => {
  // State to show/hide accordion

  return (
    <Accordion allowZeroExpanded>
        {items.map((item) => ( // psssst! items dont exists yet!!!
            <AccordionItem key={item.uuid}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.heading}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {item.content}
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
  );
}
export default Accordion