import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  //state
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'aaa',
      author: 'hop'
    },
    {
      id: 2,
      name: 'bbb'
    },
    {
      id: 3,
      name: 'ccc',
      author: 'hoang'
    }
  ]);
  const [header, setHeader] = useState(["#", "Name", "Action", "Author"])
  return (
    <div className="container">
      <div className="tirle" style={{ textAlign: "center" }}>
        <h1>To Do List</h1>
        <br />
      </div>
      <div className="input-group-mb-3 row">
        <div className="col-sm-1">
          <button className="btn btn-warning" type="button">
            Back
          </button>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter To do "
            aria-label="Recipient's username with two button addons"
            id="todo"
          />
        </div>
        <div className="col-sm-1">
          <button
            className="btn btn-primary"
            type="button"
            id="add"
            onclick="add()"
          >
            Add
          </button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-primary" type="button" onclick="search()">
            Search
          </button>
        </div>
        <div className="col-sm-1">
          <button
            className="btn btn-primary"
            type="button"
            onclick="sort_data()"
          >
            Sort
          </button>
        </div>
      </div>
      <hr />
      <div className="table">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>
                #
              </th>
              <th scope="col" style={{ width: "60%" }}>
                Name
              </th>
              <th scope="col" style={{ width: "30%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {todos.map(t, index) => (
              <tr>
                <td>{t.id}</td>
                <td>{t.name}</td>
                {t.author ? <td>{t.author}</td> : {'Khong xac dinh'}}
              </tr>
            )

            } */}
          </tbody>
          <tbody
            className="tbody"
            id="search"
            style={{ display: "none" }}
          ></tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
