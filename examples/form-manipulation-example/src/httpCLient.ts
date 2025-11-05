export interface HttpClientProps<T> {
  baseURL: string;
  headers?: Record<string, string>;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: T;
}

export interface HttpResponse<T> {
  status: number;
  data: T | null;
  error: string | null;
}

export async function httpClient<T>(
  options: HttpClientProps<T>
): Promise<HttpResponse<T>> {
  try {
    let res = null;

    switch (options.method) {
      case "GET":
        res = await fetch(options.baseURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
        });

        break;
      case "POST":
        res = await fetch(options.baseURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          body: JSON.stringify(options.body),
        });
        break;
    }

    if (!res || !res.ok) {
      throw new Error(`HTTP error! status: ${res!.status}`);
    }
    const data = (await res.json()) as T;

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
