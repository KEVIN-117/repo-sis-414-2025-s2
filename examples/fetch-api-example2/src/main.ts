import "./style.css";
import { httpClient } from "./fetchUtil";

const app = document.getElementById("app")! as HTMLDivElement;

const title = document.createElement("h1"); // <h1></h1>

title.textContent = "Fetch API Example 2"; // <h1>Fetch API Example 2</h1>

app.appendChild(title);

const BASE_URL = "https://fakestoreapi.com/";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface HttpResponse {
  status: number;
  data: Product[] | null;
  error: string | null;
}

async function getProducts() {
  const result = (await httpClient({
    baseURL: BASE_URL + "products",
    method: "GET",
  })) as HttpResponse;

  if (result.error) {
    app.innerHTML += `<p>Error: ${result.error}</p>`;
    return;
  }
  const container = document.createElement("div");

  container.className = "container mx-auto grid grid-cols-3 gap-4 align-items-stretch";

  result.data?.forEach(
    ({ category, description, id, image, price, rating, title }: Product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `<div
          class="card relative group rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="m-6 sm:m-8 rounded-3xl overflow-hidden rounded-xl">
          <span
              class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              ${category}
            </span>
            <img
              src="${image}"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-64 w-full object-contain object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="bg-slate-900/70 p-6 sm:p-8 mt-1 relative rounded-b-3xl">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
              ${title}
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              ${description}
            </p>
            <div class="flex items-center justify-between mb-6">
              <div>
                <span
                  class="inline-block rounded-full bg-green-100/50 px-3 py-1 text-sm font-medium text-green-800">
                  $${price}
                </span>
              </div>
              <div class="flex items-center">
                <span
                  class="mr-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  ${rating.rate} Stars
                </span>
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
              </div>
            </div>
            <a class="btn inline-block" href="#">
              <span class="text-info">Read more</span>
            </a>
          </div>

        </div>
      </div>`;

      container.appendChild(productDiv);
    }
  );

  app.appendChild(container);
}

getProducts();
