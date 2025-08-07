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
        <p>Hi Sahishnu, you have {count} pending tasks left</p>
      </div>
    </>
  );
}
