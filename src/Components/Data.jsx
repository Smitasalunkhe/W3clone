import './Data.css';

export let titles = ["Introduction", "GetStarted", "React Render Component", "React JSX", "React ES6", "React Render HTML", "React Props", "React Events", "React Upgrade", "React Class", "React Conditionals", "React List", "React Forms"];



export let contents = [
  //Introduction
  <div className='content-container'>
    <h1>What is React?</h1>
    <div className='ans-div'>
      <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <div className='code-div'>
        <code>
          <pre>
            {` <!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>
                    `}
          </pre>
        </code>

      </div>
    </div>
  </div>,

  //Get Started

  <div className='content-container'>
    <h1>React Getting Started</h1>
    <div className='ans-div'>
      <p>To use React in production, you need npm which is included with Node.js.
        To get an overview of what React is, you can write React code directly in HTML.
        But in order to use React in production, you need npm and Node.js installed.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <p>Include three CDN's in your HTML file:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>`}
          </pre>
        </code>

      </div>
    </div>
  </div>,

  //React render component

  <div className='content-container'>
    <h1>React Render HTML </h1>
    <div className='ans-div'>
      <p>React's goal is in many ways to render HTML in a web page.
        React renders HTML to the web page by using a function called createRoot() and its method render().
      </p>

      <h4>The createRoot Function</h4>
      The createRoot() function takes one argument, an HTML element.
      The purpose of the function is to define the HTML element where a React component should be displayed.
      <b>The render Method</b>
      The render() method is then called to define the React component that should be rendered.
      <h4>But render where?</h4>
      <p>There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

        You'll notice a single in the body of this file. This is where our React application will be rendered.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <div className='code-div'>
        <code>
          <pre>
            {` const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>); `}
          </pre>
        </code>

      </div>
    </div>
  </div>,

  //React JSX

  <div className='content-container'>
    <h1>React JSX </h1>
    <div className='ans-div'>
      <p>JSX stands for JavaScript XML.
        JSX allows us to write HTML in React.
        JSX makes it easier to write and add HTML in React.
      </p>

      <h4>Coding JSX</h4>
      <p>
        JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
        JSX converts HTML tags into react elements.
        You are not required to use JSX, but JSX makes it easier to write React applications.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <div className='code-div'>
        <code>
          <pre>
            {` const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
          </pre>
        </code>

      </div>
    </div>
  </div>,

  //React ES6
  <div className='content-container'>
    <h1>React ES6</h1>
    <div className='ans-div'>
      <p>ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
      </p>
      <p>Why Should I Learn ES6?
        React uses ES6, and you should be familiar with some of the new features like:
        <ul>
          <li>Classes</li>
          <li>Arrow Functions</li>
          <li>Variables (let, const, var)</li>
          <li>Array Methods like .map()</li>
          <li>Destructuring</li>
          <li>Modules</li>
          <li>Ternary Operator</li>
          <li>Spread Operator</li>
        </ul>

      </p>

    </div>


  </div>,

  //React Render HTML

  <div className='content-container'>
    <h1>React Render HTML</h1>
    <div className='ans-div'>
      <p>React's goal is in many ways to render HTML in a web page.
        React renders HTML to the web page by using a function called createRoot() and its method render().
      </p>

      <p>
        <h3>The createRoot Function</h3>
        The createRoot() function takes one argument, an HTML element.

        The purpose of the function is to define the HTML element where a React component should be displayed.

        The render Method
        The render() method is then called to define the React component that should be rendered.

        <h4>But render where?</h4>

        There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

        You'll notice a single in the body of this file. This is where our React application will be rendered.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <p>Include three CDN's in your HTML file:</p>
      <p>Display a paragraph inside an element with the id of "root":</p>
      <div className='code-div'>
        <code>
          <pre>
            {`const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);`}
          </pre>
        </code>
      </div>

      <p>The result is displayed in the {`<div id="root">`}element:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`<body>
  <div id="root"></div>
</body>`}
          </pre>
        </code>
      </div>
    </div>
  </div>,

  //react props

  <div className='content-container'>
    <h1>React Props </h1>
    <div className='ans-div'>
      <p>Props are arguments passed into React components.
        Props are passed to components via HTML attributes.

        <b>props stands for properties</b>
      </p>

      <h4>React Props</h4>

      <p>
        React Props are like function arguments in JavaScript and attributes in HTML.
        To send props into a component, use the same syntax as HTML attributes:
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <p>Add a "brand" attribute to the Car element</p>
      <div className='code-div'>
        <code>
          <pre>
            {`const myElement = <Car brand="Ford" />;`}
          </pre>
        </code>
      </div>

      <p>The component receives the argument as a props object:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}`}
          </pre>
        </code>
      </div>

    </div>
  </div>,

  //React events

  <div className='content-container'>
    <h1>React Events</h1>
    <div className='ans-div'>
      <p>Just like HTML DOM events, React can perform actions based on user events.
        React has the same events as HTML: click, change, mouseover etc.
      </p>

      <h4>Adding Events</h4>
      <p>
        React events are written in camelCase syntax:
        onClick instead of onclick.
        React event handlers are written inside curly braces:
        {`onClick={shoot}  instead of onclick="shoot()".`}
      </p>

    </div>

    <div className='code-div-container'>
      <h3>React</h3>
      <div className='code-div'>
        <code>
          <pre>
            {` <button onClick={shoot}>Take the Shot!</button>`}
          </pre>
        </code>
      </div>

      <h3>HTML</h3>
      <div className='code-div'>
        <code>
          <pre>
            {` <button onclick="shoot()">Take the Shot!</button>`}
          </pre>
        </code>
      </div>
    </div>
  </div>,

  //React Upgrade

  <div className='content-container'>
    <h1>Upgrade React</h1>
    <div className='ans-div'>
      <p>Upgrade to React 18
        Upgrading an existing React application to version 18 only requires two steps.
        If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.
      </p>

      <h4>Step 1: Install React 18</h4>
      <p>To install the latest version, from your project folder run the following from the terminal:</p>
    </div>

    <div className='code-div-container'>
      <div className='code-div'>
        <code>
          <pre>
            {` npm i react@latest react-dom@latest`}
          </pre>
        </code>
      </div>


    </div>


    <h4>Step 2: Use the new root API</h4>
    <p>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.</p>
    <div className="code-div-container">
      <div className='code-div-container'>
        <div className='code-div'>
          <code>
            <pre>
              {` // Before
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            </pre>
          </code>
        </div>
      </div>
    </div>


  </div>,

  //React Class

  <div className='content-container'>
    <h1>React Class Components</h1>
    <div className='ans-div'>
      <p>Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".
        With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.
        Even though Function components are preferred, there are no current plans on removing Class components from React.
        This section will give you an overview of how to use Class components in React.
      </p>

      <h3>Create a Class Component</h3>
      <p>When creating a React component, the component's name must start with an upper case letter.

        The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

        The component also requires a render() method, this method returns HTML.

      </p>

    </div>

    <div className='code-div-container'>
      <h3>Coding Example</h3>
      <p>Create a Class component called Car</p>
      <div className='code-div'>
        <code>
          <pre>
            {`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}
          </pre>
        </code>

      </div>
      <p>Now your React application has a component called Car, which returns a element
        To use this component in your application, use similar syntax as normal HTML: {`<Car />`}</p>

      <p>Display the Car component in the "root" element:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);`}
          </pre>
        </code>

      </div>
    </div>
  </div>,

  //React Conditionals

  <div className='content-container'>
    <h1>React Conditional Rendering</h1>
    <div className='ans-div'>
      <p>In React, you can conditionally render components. There are several ways to do this.
      </p>

      <p>
        <h3>if Statement</h3>
        We can use the if JavaScript operator to decide which component to render.
      </p>

    </div>

    <div className='code-div-container'>
      <h3>Example</h3>
      <p>We'll use these two components:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}`}
          </pre>
        </code>
      </div>

      <p>Now, we'll create another component that chooses which component to render based on a condition:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);`}
          </pre>
        </code>
      </div>
      <p>Try changing the isGoal attribute to true:</p>
      <div className='code-div'>
        <code>
          <pre>
            {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);`}
          </pre>
        </code>
      </div>

      <h1>Logical && Operator</h1>
      <div className='code-div'>
        <h2>We can embed JavaScript expressions in JSX by using curly braces:</h2>
        <code>
          <pre>
            {`function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);`}
          </pre>
        </code>
      </div>
    </div>
  </div>












];
