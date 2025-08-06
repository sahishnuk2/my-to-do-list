import TableRow from "./TableRow";

export default function Table() {
  return (
    <>
      <div className="subject">
        <table>
          <thead>
            <tr>
              <th colSpan={6}>CS2100</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
        <Add />
      </div>
    </>
  );
}

function Add() {
  return <button className="add">Add Task</button>;
}
