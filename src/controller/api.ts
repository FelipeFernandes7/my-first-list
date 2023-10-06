import { Status } from "../components/status";

interface UserProps {
  name: string;
  status: Status;
  time: Date;
}
export async function addNewUser({ name, status, time }: UserProps) {
  const data = await fetch(
    `https://us-central1-test-9c3f8.cloudfunctions.net/api/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        status,
        time,
      }),
    }
  );
  return data;
}
