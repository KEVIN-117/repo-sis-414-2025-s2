interface HttpClientProps {
  baseURL: string;
  headers?: Record<string, string>;
  method: "GET" | "POST" | "PUT" | "DELETE";
}

/*
return fetch(options.baseURL, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      response
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error("Error parsing JSON:", err);
        });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
*/

export async function httpClient(options: HttpClientProps) {
  try {
    const res = await fetch(options.baseURL, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    const resultData = {
      status: res.status,
      data: data,
      error: null,
    };
    return resultData;
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 500,
        data: null,
        error: error.message,
      };
    }
    return {
      status: 500,
      data: null,
      error: "Unknown error",
    };
  }
}
