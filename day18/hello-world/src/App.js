import logo from "./logo.svg";
import "./App.css";

function list() {
  return (
    <ul id="to-do-list">
      <li className="to-do-list-content">
        <input type="checkbox" />
        <p className="list-text">야채 사오기</p>
        <p className="list-day">2023-03-07</p>
        <button href="#" class="del-button">
          삭제
        </button>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="add-list-container">
          <h2>할일 추가하기</h2>
          <div className="add-function-wrapper">
            <input
              type="text"
              id="add-input"
              placeholder="할 일을 입력해주세요"
            />

            <button href="#" id="add-button">
              추가
            </button>
          </div>
        </div>

        <div className="to-do-list-container">
          <h2>오늘의 할 일</h2>
          <ul id="to-do-list"></ul>
          <list></list>
        </div>
      </div>
    </div>
  );
}

export default App;
