import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Tooltip from "../components/Tooltip";
import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Tabs from "../components/Tabs"; // Assuming you have this component
import Form from "../components/Form"; // Assuming you have this component

const buttonCode = `
  <Button label="Click Me" size="large" variant="primary" />
`;

const cardCode = `
  <Card title="Card Title" content="This is a simple card component with some content." />
`;

const modalCode = `
  <Modal>
    <h2>Modal Title</h2>
    <p>This is a modal component. You can put any content here.</p>
  </Modal>
`;

const tooltipCode = `
  <Tooltip text="This is a tooltip!">
    <button>Hover over me</button>
  </Tooltip>
`;

const accordionCode = `
  <Accordion title="Click to Expand">
    <p>This is some content inside the accordion.</p>
  </Accordion>
`;

const sliderCode = `
  <Slider min={0} max={100} step={1} value={50} onChange={(value) => console.log(value)} />
`;

const dropdownCode = `
  <Dropdown options={["Option 1", "Option 2", "Option 3"]} selected="Option 1" />
`;

const tabsCode = `
  <Tabs>
    <div label="Tab 1">Content for Tab 1</div>
    <div label="Tab 2">Content for Tab 2</div>
  </Tabs>
`;

const formCode = `
  <Form onSubmit={(data) => console.log(data)}>
    <input type="text" placeholder="Enter something" />
    <button type="submit">Submit</button>
  </Form>
`;

const Playground = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Interactive Playground</h1>

      {/* Button Component */}
      <section>
        <h2>Button</h2>
        <LiveProvider code={buttonCode} scope={{ Button }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Card Component */}
      <section>
        <h2>Card</h2>
        <LiveProvider code={cardCode} scope={{ Card }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Modal Component */}
      <section>
        <h2>Modal</h2>
        <LiveProvider code={modalCode} scope={{ Modal }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Tooltip Component */}
      <section>
        <h2>Tooltip</h2>
        <LiveProvider code={tooltipCode} scope={{ Tooltip }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Accordion Component */}
      <section>
        <h2>Accordion</h2>
        <LiveProvider code={accordionCode} scope={{ Accordion }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Slider Component */}
      <section>
        <h2>Slider</h2>
        <LiveProvider code={sliderCode} scope={{ Slider }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Dropdown Component */}
      <section>
        <h2>Dropdown</h2>
        <LiveProvider code={dropdownCode} scope={{ Dropdown }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Tabs Component */}
      <section>
        <h2>Tabs</h2>
        <LiveProvider code={tabsCode} scope={{ Tabs }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>

      {/* Form Component */}
      <section>
        <h2>Form</h2>
        <LiveProvider code={formCode} scope={{ Form }}>
          <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
            <h3>Preview:</h3>
            <LivePreview />
          </div>
          <h3>Edit Code:</h3>
          <LiveEditor style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }} />
          <LiveError />
        </LiveProvider>
      </section>
    </div>
  );
};

export default Playground;
