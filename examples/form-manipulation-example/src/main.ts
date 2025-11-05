import { httpClient } from "./httpCLient";
import type { HttpResponse } from "./httpCLient";
import type { Product } from "./ui/ProductUI";
import { showProductUI } from "./ui/ProductUI";
import { showClientUI } from "./ui/ClientUI";
import type { Client } from "./ui/ClientUI";

const URL_BASE = "https://fakestoreapi.com/";

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab") as string;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const targetContent = document.getElementById(targetTab);
      console.log(targetContent);

      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  // Form submission handlers (prevent default for now)
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form instanceof HTMLFormElement) {
        if (form.id === "product_form") {
          const formData = new FormData(form);
          createProduct(formData);
        } else if (form.id === "client_form") {
          const formData = new FormData(form);
          console.log("Client Form Data:");
          formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
          });
        }
      }
      console.log("Form submitted:", form.id);
      alert("Formulario enviado! (Solo interfaz por ahora)");
    });
  });
});

export async function getAllProducts() {
  const response = await httpClient<Product[]>({
    baseURL: `${URL_BASE}products`,
    method: "GET",
  });

  const products = response.data;

  const productListUI = document.getElementById("product-list_ui")!;

  products?.forEach((products) => {
    const productHTML = showProductUI(products);

    productListUI.innerHTML += productHTML;
  });
}

getAllProducts();

export async function getAllClients() {
  const response = await httpClient<Client[]>({
    baseURL: `${URL_BASE}users`,
    method: "GET",
  });

  const clients = response.data;

  const clientListUI = document.getElementById("client-list_ui")!;

  clients?.forEach((client) => {
    const clientHTML = showClientUI(client);

    clientListUI.innerHTML += clientHTML;
  });
}
getAllClients();

// forms

async function createProduct(data: FormData) {
  const saveData = {
    title: data.get("product_title") as string,
    price: data.get("product_price") as unknown as number,
    description: data.get("product_description") as string,
    category: data.get("product_category") as string,
    image: data.get("product_image") as string,
  };

  const res = await httpClient<{
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }>({
    baseURL: `${URL_BASE}products`,
    method: "POST",
    body: saveData,
  });

  console.log(res);
}

/*
product_title: wbvsjdvjhdbshj
main.ts:41 product_price: 12
main.ts:41 product_category: women's clothing
main.ts:41 product_description: nvdsbh dsh dsnkndskjndksnj
main.ts:41 product_image: https://www.bing.com/images/search?view=detailV2&ccid=3OfI4G5Q&id=FF7FF6E027B10E2C4C87EBD5FB7FD46C42D38A8A&thid=OIP.3OfI4G5QLqcshpyToxWaVQAAAA&mediaurl=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fscary-kitty-kathy-barney.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.dce7c8e06e502ea72c869c93a3159a55%3Frik%3DiorTQmzUf%252fvV6w%26pid%3DImgRaw%26r%3D0&exph=900&expw=420&q=imgesnes&form=IRPRST&ck=72F8265C960F3F9493087111532307EE&selectedindex=4&itb=0&ajaxhist=0&ajaxserp=0&cit=ccid_0962GOT7*cp_3D144792F5BC1434EF3FD304B37987C8*mid_525E1D7895ED59FD6EF54FD2DEA49C296E69C641*thid_OIP.0962GOT7BTJqo7OermtRugHaEK&vt=2
main.ts:41 product_rating: 5
main.ts:41 product_count: 10
main.ts:52 Form submitted: product_form
*/
