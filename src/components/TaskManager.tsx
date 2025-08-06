import Table from "./Table";

export default function TaskManager() {
  return (
    <>
      <div className="tasks">
        <h2>Tasks</h2>
        <button>Add new subject</button>
      </div>
      <Table />
    </>
  );
}
