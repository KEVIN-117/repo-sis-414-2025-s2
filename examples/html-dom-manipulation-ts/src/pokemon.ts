
// export class Pokemon {
//   private data: PokemonResponse;
//   private uiPokemon: String;
//   constructor(data: PokemonResponse) {
//     this.data = data;
//     this.uiPokemon = `<div class="pokemon-card">
//       <div class="pokemon-header">
//         <h2 class="pokemon-name">${this.data.name.toUpperCase()}</h2>
//         <p class="pokemon-id">#${this.data.id}</p>
//       </div>
//       <div class="sprites-container">
//         ${Object.entries(this.data.sprites)
//           .filter(([_, value]) => typeof value === "string" && value !== null)
//           .map(
//             ([key, value]) => `
//             <div class="sprite-box">
//               <img src="${value}" alt="${key}" title="${key}" />
//             </div>
//           `
//           )
//           .join("")}
//       </div>

//       <div class="pokemon-header">
//         <h2 class="pokemon-details-key">
//           WEIGHT
//         </h2>
//         <p class="pokemon-details-value ">${this.data.weight}</p>
//       </div>
      
//       <div class="abilities-section">
//         <h2 class="abilities-title">ABILITIES</h2>
//         <div class="abilities-grid">
//           ${this.data.abilities
//             .map(
//               (ability) => `
//             <div class="ability-pill">${ability.ability.name}</div>
//           `
//             )
//             .join("")}
//         </div>
//       </div>
//       <div class="abilities-section">
//         <h2 class="abilities-title">TYPES</h2>
//         <div class="abilities-grid">
//           ${this.data.types
//             .map(
//               (type) => `
//             <div class="ability-pill">${type.type.name}</div>
//           `
//             )
//             .join("")}
//         </div>
//       </div>
      
//       <div class="pokemon-footer">
//         <button class="button button-previous">previous</button>
//         <button class="button button-next">next</button>
//       </div>
//     </div>`;
//   }
// }
