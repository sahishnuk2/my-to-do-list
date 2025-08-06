import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="pending">
        <p>Hi Sahishnu, you have no pending tasks left</p>
      </div>
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="subject">
          <table>
            <thead>
              <tr>
                <th colSpan={5}>CS2100</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>isCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Not Started</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>In Progress</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 3</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Finished</td>
                <td>True</td>
              </tr>
            </tbody>
          </table>
          <button className="add">Add Task</button>
        </div>
        <div className="subject">
          <table>
            <thead>
              <tr>
                <th colSpan={5}>ACC1701X</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>isCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Not Started</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>In Progress</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 3</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Finished</td>
                <td>True</td>
              </tr>
            </tbody>
          </table>
          <button className="add">Add Task</button>
        </div>
        <div className="subject">
          <table>
            <thead>
              <tr>
                <th colSpan={5}>CS2103T</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>isCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Not Started</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>In Progress</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 3</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Finished</td>
                <td>True</td>
              </tr>
            </tbody>
          </table>
          <button className="add">Add Task</button>
        </div>
        <div className="subject">
          <table>
            <thead>
              <tr>
                <th colSpan={5}>ST2334</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Progress</th>
                <th>isCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Not Started</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>In Progress</td>
                <td>False</td>
              </tr>
              <tr>
                <td>Task 3</td>
                <td>25/08/25</td>
                <td>High</td>
                <td>Finished</td>
                <td>True</td>
              </tr>
            </tbody>
          </table>
          <button className="add">Add Task</button>
        </div>
      </div>
    </>
  );
}

export default App;
