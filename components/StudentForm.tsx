import { createStudent } from "@/services/students";
import React, { FormEvent, useState } from "react";

interface IStudentForm {
  submitForm: (newName: string) => void;
}

const StudentForm: React.FC<IStudentForm> = (props) => {
  const [newName, setNewName] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    props.submitForm(newName);
    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New student</h2>
      <label htmlFor="name">
        <input
          name="name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;
