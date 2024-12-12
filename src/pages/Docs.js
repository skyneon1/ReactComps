import React from "react";
import { LiveProvider, LivePreview } from "react-live";

// Import components
import Button from "../components/Button";
import Modal from "../components/Modal";
import Tooltip from "../components/Tooltip";
import Accordion from "../components/Accordion";
import Input from "../components/Input";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Switch from "../components/Switch";

const Docs = () => {
  const buttonCode = `<Button label="Click Me" size="large" variant="primary" />`;
  const modalCode = `<Modal isOpen={true} onClose={() => {}}>This is a Modal</Modal>`;
  const tooltipCode = `<Tooltip text="This is a tooltip">Hover over me!</Tooltip>`;
  const accordionCode = `<Accordion title="Click to Expand">This is accordion content</Accordion>`;
  const inputCode = `<Input label="Username" type="text" placeholder="Enter username" />`;
  const cardCode = `<Card title="Card Title" description="This is a card description" image="https://via.placeholder.com/150" />`;
  const avatarCode = `<Avatar image="https://via.placeholder.com/150" size="medium" />`;
  const badgeCode = `<Badge text="New" color="blue" />`;
  const switchCode = `<Switch />`;

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Library Docs</h1>
      <p>Welcome to the documentation for React UI Showcase. Below you’ll find examples of all the components available in this library.</p>

      {/* Button */}
      <h3>Button Component</h3>
      <p>
        A simple button component with different variants like primary, secondary, and outline.
      </p>
      <LiveProvider code={buttonCode} scope={{ Button }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{buttonCode}</pre>
      </LiveProvider>

      {/* Modal */}
      <h3>Modal Component</h3>
      <p>
        The Modal component can be used to display content in a popup overlay. It is controlled by the `isOpen` prop.
      </p>
      <LiveProvider code={modalCode} scope={{ Modal }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{modalCode}</pre>
      </LiveProvider>

      {/* Tooltip */}
      <h3>Tooltip Component</h3>
      <p>
        The Tooltip component displays additional information when the user hovers over an element.
      </p>
      <LiveProvider code={tooltipCode} scope={{ Tooltip }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{tooltipCode}</pre>
      </LiveProvider>

      {/* Accordion */}
      <h3>Accordion Component</h3>
      <p>
        The Accordion component allows you to display collapsible content.
      </p>
      <LiveProvider code={accordionCode} scope={{ Accordion }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{accordionCode}</pre>
      </LiveProvider>

      {/* Input */}
      <h3>Input Component</h3>
      <p>
        The Input component is used to collect user data through text fields.
      </p>
      <LiveProvider code={inputCode} scope={{ Input }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{inputCode}</pre>
      </LiveProvider>

      {/* Card */}
      <h3>Card Component</h3>
      <p>
        The Card component is used to display content in a card-like format, such as an image with a title and description.
      </p>
      <LiveProvider code={cardCode} scope={{ Card }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{cardCode}</pre>
      </LiveProvider>

      {/* Avatar */}
      <h3>Avatar Component</h3>
      <p>
        The Avatar component displays user profile pictures or icons.
      </p>
      <LiveProvider code={avatarCode} scope={{ Avatar }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{avatarCode}</pre>
      </LiveProvider>

      {/* Badge */}
      <h3>Badge Component</h3>
      <p>
        The Badge component is used to display small pieces of information like notifications, status, or tags.
      </p>
      <LiveProvider code={badgeCode} scope={{ Badge }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{badgeCode}</pre>
      </LiveProvider>

      {/* Switch */}
      <h3>Switch Component</h3>
      <p>
        The Switch component is used to toggle between two states, such as on/off.
      </p>
      <LiveProvider code={switchCode} scope={{ Switch }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>Preview:</h4>
          <LivePreview />
        </div>
        <h4>Code:</h4>
        <pre>{switchCode}</pre>
      </LiveProvider>
    </div>
  );
};

export default Docs;
