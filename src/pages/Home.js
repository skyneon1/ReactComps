import React from "react";
import Header from "../components/Header";
import "../styles/Home.css"; // For custom styles

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      
      <section className="intro-section">
        <h2 className="title">Welcome to React UI Showcase</h2>
        <p className="intro-text">
          Discover a library of stunning, reusable React components designed to help you build
          interactive, dynamic, and responsive user interfaces effortlessly. Whether you're a beginner
          or a seasoned developer, our components are flexible, customizable, and easy to integrate into
          any React project.
        </p>
        <p className="intro-text">
          From buttons and modals to more complex elements like carousels, accordions, and tooltips,
          explore our extensive library of UI components. Start building beautiful applications with minimal effort.
        </p>
        <div className="cta-button-container">
          <a href="/playground" className="cta-button">
            Start Exploring
          </a>
        </div>
      </section>

      <section className="features-section">
        <h3 className="features-title">Why Choose React UI Showcase?</h3>
        <div className="features-description">
          <div className="feature-card">
            <h4>Seamless Integration</h4>
            <p>
              Our components are plug-and-play! Simply import them into your React app, customize them to fit
              your needs, and you're ready to go. Whether you're using state management or plain React hooks,
              our components will integrate smoothly.
            </p>
          </div>
          <div className="feature-card">
            <h4>Fully Customizable</h4>
            <p>
              Tailor every component to match your branding and design system. From colors and fonts to padding and
              margins, you'll have full control over how each element appears, ensuring they fit seamlessly into your app.
            </p>
          </div>
          <div className="feature-card">
            <h4>Responsive & Mobile-Ready</h4>
            <p>
              Each component is designed to be fully responsive out of the box. Whether it's a small screen or a
              large desktop display, your UI will look great on any device.
            </p>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h3 className="explore-title">Explore Our Popular Components</h3>
        <div className="explore-cards">
          <div className="card">
            <h4>Buttons</h4>
            <p>
              Explore a variety of button styles, each with customizable properties like size, color, and hover
              effects. Perfect for any call-to-action within your app.
            </p>
          </div>
          <div className="card">
            <h4>Modals</h4>
            <p>
              Design stunning modals with our pre-built components, featuring smooth animations and easy-to-use
              features like custom headers, footers, and content.
            </p>
          </div>
          <div className="card">
            <h4>Cards</h4>
            <p>
              Display your content elegantly with our responsive card components. Use them for blog posts, product
              listings, or any other type of content display.
            </p>
          </div>
        </div>
      </section>
      <div className="ball"></div>


      <section className="cta-section">
        <h3 className="cta-title">Ready to Get Started?</h3>
        <p className="cta-text">
          Dive into our interactive playground where you can preview and customize all of our components. Start
          building beautiful UI components with React today.
        </p>
        <div className="cta-button-container">
          <a href="/playground" className="cta-button">
            Go to Playground
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
