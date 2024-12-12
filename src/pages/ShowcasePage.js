import React from "react";
import ButtonShowcase from "../components/Showcase/ButtonShowcase";
import ModalShowcase from "../components/Showcase/ModalShowcase";
import CardShowcase from "../components/Showcase/CardShowcase";
import TooltipShowcase from "../components/Showcase/TooltipShowcase";
import FormShowcase from "../components/Showcase/FormShowcase";
import AccordionShowcase from "../components/Showcase/AccordionShowcase";
import SliderShowcase from "../components/Showcase/SliderShowcase";

const ShowcasePage = () => {
  return (
    <div>
      <ButtonShowcase />
      <ModalShowcase />
      <CardShowcase />
      <TooltipShowcase />
      <FormShowcase />
      <AccordionShowcase />
      <SliderShowcase />
    </div>
  );
};

export default ShowcasePage;
