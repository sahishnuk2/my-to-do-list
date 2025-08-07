import { useState } from "react";
import "./AddSubjectPopUp.css";

type Prop = {
  onClose: () => void;
  onSubmit: (str: string) => void;
};

export default function AddSubjectPopUp({ onClose, onSubmit }: Prop) {
  const [subjectName, setSubjectName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (subjectName.trim() !== "") {
      onSubmit(subjectName.trim());
    }
  }

  return (
    <>
      <div className="adding-task">
        <div id="add-subject" className="adding-contents">
          <form id="subject-adder" onSubmit={handleSubmit}>
            <div className="subject-name task-details">
              <p>Subject:</p>
              <input
                type="text"
                onChange={(e) => setSubjectName(e.target.value)}
                placeholder="e.g.CS2040S"
              ></input>
            </div>
            <div className="btns">
              <button>Add Subject</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
