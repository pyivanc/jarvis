import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SMain = styled.div`
    background-color: #ffeeff;
`;

const App = () => (
  <SMain>
    <h1 className="App-Title">Hello Parcel x React</h1>
  </SMain>
);

ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}