let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderNewApp();
}

const appRoot = document.getElementById('app');

const renderNewApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderNewApp();
