import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

// modulos -> import y export
// innerText -> para insertar texto
// innerHTML -> para insertar codigo HTML

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

interface FetchOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
}

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
}

interface PokeApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Pokemon>;
}
// no async y await
async function fetchDataApi<T>(options: FetchOptions): Promise<T | undefined> {
  try {
    const response = await fetch(options.url, {
      method: options.method,
    });

    const data: PokeApiResponse = await response.json();

    return data as unknown as T;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const app = document.getElementById("app");

app!.innerHTML = `
  <div>
    <h1>Pokemon APP </h1>
  </div>
`;

async function renderPokemonList(url: string = BASE_URL) {
  const nextButton = document.createElement("button");
  const prevButton = document.createElement("button");
  const pokemonList = document.createElement("ul");
  const data = await fetchDataApi<PokeApiResponse>({
    method: "GET",
    url: url,
  });

  if (data) {
    data.results.forEach(async ({ name, url }: Pokemon) => {
      const pokemonDetails = await fetchDataApi<PokemonDetail>({
        method: "GET",
        url,
      });

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h2>${pokemonDetails?.name} (ID: ${pokemonDetails?.id})</h2>
        <p>Height: ${pokemonDetails?.height}</p>
        <p>Weight: ${pokemonDetails?.weight}</p>
        <img src="${pokemonDetails?.sprites.front_default}" alt="${pokemonDetails?.name} front">
        <img src="${pokemonDetails?.sprites.back_default}" alt="${pokemonDetails?.name} back">
      `;
      pokemonList.appendChild(listItem);
    });
  }
  if (data?.next !== null) {
    nextButton.innerText = "Next";
    nextButton.onclick = () => {
      pokemonList.innerHTML = "";
      renderPokemonList(data!.next!);
    };
  }
  if (data?.previous !== null) {
    prevButton.innerText = "Previous";
    prevButton.onclick = () => {
      pokemonList.innerHTML = "";
      renderPokemonList(data!.previous!);
    };
  }
  app!.appendChild(nextButton);
  app!.appendChild(prevButton);
  app!.appendChild(pokemonList);
}

renderPokemonList();
