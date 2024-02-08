import React, { useState } from 'react';
import {
    Accordion, 
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import  "./Value.css";
import data from "../../utils/accordion";
import { IoIosArrowDropdown } from "react-icons/io";

function Value() {
    return (
    <section className="v-wrapper">
        <div className=" paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

             {/* right side */}
            <div className="flexCenter v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for You
                    <br />
                    We beleive a good blace to live can make your life better
                </span>

                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item,i) =>{
                            const [className, setClassName] = useState(null);
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key ={i} uuid={i} >
                                    <AccordionItemState>
                                        {({expended}) => expended ? setClassName("expended") : setClassName("collapsed")}
                                    </AccordionItemState>

                                    <AccordionItemHeading>
                                        <AccordionItemButton className=' flexCenter accordionButton'>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <IoIosArrowDropdown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>
        </div>
    </section>
    )
}

export default Value;
