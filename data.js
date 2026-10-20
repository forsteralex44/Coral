/* ============================================================
   EDIT THIS FILE to change your site. Keep the quotes, commas,
   and brackets exactly as they are; only change the text inside "quotes".

   PHOTOS: put image files in the "images" folder, then write the path,
   e.g.  "photo": "images/my-coral.jpg"   (leave "" for a placeholder).

   LISTS: to add a coral/pack, copy one whole { ... } block, paste it
   after a comma, and edit it. To remove one, delete its whole block.
   "featured": true  -> also shown on the Home page.
   Packs with "ready": false stay hidden from the public site.
   ============================================================ */
const DATA = {
  "site": {
    "shopName": "[SHOP NAME]",
    "email": "you@example.com",
    "location": "[CITY, STATE]",
    "tagline": "Aquacultured corals for reef hobbyists. [PLACEHOLDER TAGLINE]",
    "about": "[PLACEHOLDER: a few sentences about you, your tank setup, and why you started growing coral.]"
  },
  "cto": [
    {
      "name": "[Sample coral name A]",
      "photo": "",
      "fragSize": "[e.g. 3–5 heads]",
      "price": "[$00]",
      "care": "[Lighting / flow / feeding notes]",
      "featured": true
    },
    {
      "name": "[Sample coral name B]",
      "photo": "",
      "fragSize": "[e.g. 1 inch]",
      "price": "[$00]",
      "care": "[Lighting / flow / feeding notes]",
      "featured": false
    }
  ],
  "wys": [
    {
      "name": "[Sample piece 1]",
      "photo": "",
      "size": "[e.g. 2 in]",
      "price": "[$00]",
      "available": true,
      "featured": true
    },
    {
      "name": "[Sample piece 2]",
      "photo": "",
      "size": "[e.g. 1.5 in]",
      "price": "[$00]",
      "available": false,
      "featured": false
    }
  ],
  "packs": [
    {
      "name": "[Pack name 1]",
      "count": "[#]",
      "price": "[$00]",
      "types": "[e.g. soft corals, zoanthids]",
      "sizes": "[approx. size]",
      "ready": true
    },
    {
      "name": "[Pack name 2]",
      "count": "",
      "price": "",
      "types": "",
      "sizes": "",
      "ready": false
    },
    {
      "name": "[Pack name 3]",
      "count": "",
      "price": "",
      "types": "",
      "sizes": "",
      "ready": false
    }
  ],
  "ship": {
    "shipping": "[PLACEHOLDER: carriers, shipping days, cost, packaging, live-arrival policy.]",
    "pickup": "[PLACEHOLDER: pickup area, days/times, how pickup is arranged.]",
    "policies": "[PLACEHOLDER: returns, DOA, payment methods once orders open.]"
  }
};
