import { IStudent } from "@/entities/student";

export async function getStudents(): Promise<IStudent[]> {
  const response = await fetch("http://localhost:4000/students");
  const json = await response.json();
  return json;
}
