import { Status } from "../components/status";

interface User {
  name: string;
  status: Status;
  time: Date;
}

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function addNewUser(user: User): Promise<Response> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to add new user");
    }

    return response;
  } catch (error: any) {
    throw new Error(`Failed to add new user: ${error.message}`);
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();
    return users;
  } catch (error: any) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}
