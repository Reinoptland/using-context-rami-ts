import { IStudent } from "@/entities/student";

export async function getStudents(): Promise<IStudent[]> {
  const response = await fetch("http://localhost:4000/students");
  const json = await response.json();
  return json as IStudent[];
}

export async function createStudent(name: string): Promise<IStudent> {
  const response = await fetch("http://localhost:4000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  const json = await response.json();
  return json as IStudent;
}
