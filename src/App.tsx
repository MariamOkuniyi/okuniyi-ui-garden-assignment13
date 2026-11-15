import React from 'react';
import { Button } from './components/Button/Button';

function App() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '900px',
        margin: '50px auto',
        padding: '24px',
        color: '#243047',
      }}
    >
      <header>
        <h1>UI Garden — React Component Library</h1>
        <p>
          A reusable React and TypeScript component library built with Styled Components, Storybook,
          Jest, Docker, and automated CI/CD quality checks.
        </p>
      </header>

      <hr />

      <section>
        <h2>Button Component</h2>
        <p>Examples of the reusable Button component with different styles and states.</p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            marginTop: '24px',
          }}
        >
          <Button backgroundColor="#2563eb" onClick={() => alert('Primary button clicked!')}>
            Primary Button
          </Button>

          <Button backgroundColor="#16a34a" onClick={() => alert('Success button clicked!')}>
            Success Button
          </Button>

          <Button backgroundColor="#dc2626">Danger Button</Button>

          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <hr style={{ marginTop: '40px' }} />

      <section>
        <h2>Automated Code Quality</h2>
        <ul>
          <li>Prettier — Code formatting</li>
          <li>ESLint — Code quality</li>
          <li>Jest — Automated testing</li>
          <li>Husky — Pre-commit checks</li>
          <li>GitHub Actions — Continuous Integration</li>
          <li>Docker — Production deployment</li>
        </ul>
      </section>

      <footer style={{ marginTop: '40px' }}>
        <p>UI Garden | WEBD-3012 | Assignment 13</p>
      </footer>
    </main>
  );
}

export default App;
