const API_KEY = import.meta.env.VITE_API_URL;

export async function FetchTableContent(page, pageSize) {
  try {
    const response = await fetch(
      `${API_KEY}/contacts?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function DeleteContact(id) {
  if (!id) {
    return;
  }

  const query = {
    id: id,
  };

  const queryString = new URLSearchParams(query).toString();
  try {
    const response = await fetch(`${API_KEY}/contacts?${queryString}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
}

export async function addContact(contactData) {
  console.log(contactData);

  try {
    const response = await fetch(`${API_KEY}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error("Failed to add contact");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding contact:", error);
  }
}

export async function updateContact(id, data) {
  if (!id || !data) {
    return;
  }

  console.log(id);
  console.log(data);

  const query = {
    id: id,
  };

  const queryString = new URLSearchParams(query).toString();

  try {
    const response = await fetch(`${API_KEY}/contacts?${queryString}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update contact");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error updating contact:", error.message);
  }
}
