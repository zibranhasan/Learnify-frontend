export const registerUser = async (values: any) => {
  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure JSON is being sent
    },
    body: JSON.stringify(values), // Send JSON, not FormData
  });

  return response.json();
};
export const loginUser = async (values: any) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure JSON is being sent
    },
    body: JSON.stringify(values), // Send JSON, not FormData
  });

  return response.json();
};
