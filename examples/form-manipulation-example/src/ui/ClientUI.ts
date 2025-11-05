/*
{
"address": {
"geolocation": {
"lat": "-37.3159",
"long": "81.1496"
},
"city": "kilcoole",
"street": "new road",
"number": 7682,
"zipcode": "12926-3874"
},
"id": 1,
"email": "john@gmail.com",
"username": "johnd",
"password": "m38rmF$",
"name": {
"firstname": "john",
"lastname": "doe"
},
"phone": "1-570-236-7033",
"__v": 0
}
*/

export interface Client {
  id: number;
  email: string;
  username: string;
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

export function showClientUI({
  address,
  email,
  id,
  name,
  password,
  phone,
  username,
}: Client): string {
  return `<div class="container-style-inverted rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3
                  class="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                  $${name.firstname} ${name.lastname}</h3>
                <p class="text-sm"><span class="text-[var(--primary)]">Username:</span> $${username}</p>
                <p class="text-sm"><span class="text-[var(--primary)]">Email:</span> $${email}</p>
                <p class="text-sm"><span class="text-[var(--primary)]">Phone:</span> $${phone}</p>
              </div>
              <div class="md:col-span-2">
                <h4 class="text-sm font-semibold mb-2 text-[var(--secondary)]">Dirección</h4>
                <p class="text-sm">$${address.street}, $${address.number}</p>
                <p class="text-sm">$${address.city}, $${address.zipcode}</p>
                <p class="text-sm mt-2"><span class="text-[var(--primary)]">Geolocation:</span> Lat: $${address.geolocation.lat}, Long: $${address.geolocation.long}</p>
              </div>
            </div>
          </div>
`;
}
