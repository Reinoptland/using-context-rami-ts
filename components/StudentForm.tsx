import { createStudent } from "@/services/students";
import React, { FormEvent, useEffect, useState } from "react";

interface IStudentForm {
  submitForm: (newName: string) => void;
  mode: string;
  studentName?: string;
}

const StudentForm: React.FC<IStudentForm> = (props) => {
  const [newName, setNewName] = useState<string>(props.studentName || "");

  useEffect(() => {
    if (props.studentName !== undefined) {
      setNewName(props.studentName);
    }
  }, [props.studentName]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    props.submitForm(newName);
    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{props.mode} student</h2>
      <label htmlFor="name">
        <input
          name="name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <button type="submit">{props.mode}</button>
    </form>
  );
};

export default StudentForm;
