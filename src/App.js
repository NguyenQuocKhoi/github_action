import logo from './logo.svg';
import './App.css';
import gitAc from './img/githubAction.jpg';

function App() {
  return (
    <div className="App">
      <h1>Github Action</h1>
      <h2>Nhóm 16</h2>
      <h2>20036191 - Nguyễn Quốc Khôi</h2>
      <h2>20030131 - Phạm Chí Xuân</h2>
      <h2>Xin chào tất cả mọi người</h2>
      <img src={gitAc} className="GitAc-img" alt="image"/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
