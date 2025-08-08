import "./Header.css";

type Prop = {
  count: number;
};

export default function Header({ count }: Prop) {
  return (
    <>
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="pending">
        <p>
          {count === 0
            ? "You have completed all your tasks!"
            : `You have ${count} pending ${
                count === 1 ? "task" : "tasks"
              } left!`}
        </p>
      </div>
    </>
  );
}
