
// Array of 10 must-try Thai foods
const thaiFoods = [
  {
    name: 'Pad Thai',
    description:
      'A classic Thai stir-fried noodle dish known for its sweet, tangy, and savory flavors. It features rice noodles tossed with tamarind sauce, eggs, tofu, and your choice of protein (shrimp, chicken, or tofu), garnished with crushed peanuts, bean sprouts, and lime wedges. A balance of textures and flavors makes Pad Thai a universally loved comfort food.',
    img: '../../images/pad-thai.jpg',
  },
  {
    name: 'Tom Yum Goong',
    description:
      'Tom yum is a classic Thai soup famous for its bold, aromatic, and refreshing flavors. Is made with a fragrant broth infused with lemongrass, galangal, kaffir lime leaves, Thai chilies, and is typically garnished with fresh herbs and lime juice.',
    img: '../../images/tom-yum.jpg',
  },
  {
    name: 'Gaeng Kiew Wan',
    description:
      'Green Curry is a popular Thai dish known for its creamy, aromatic, and mildly spicy flavors. It features a rich and creamy coconut milk-based curry with a blend of fresh green chilies, Thai basil leaves, kaffir lime leaves, and other fragrant herbs and spices. Green Curry is typically made with chicken, beef, or tofu, and is served with steamed jasmine rice or rice noodles.',
    img: '../../images/green-curry.jpg',
  },
  {
    name: 'Som Tum',
    description:
      'Thai Green Papaya Salad, is one of the most iconic and beloved dishes in Thai cuisine. It originates from the northeastern region of Thailand (Isan) but is enjoyed nationwide and beyond due to its vibrant flavors. Som Tum combines a perfect balance of spicy, sour, salty, and sweet flavors, making it a refreshing yet bold dish.',
    img: '../../images/papaya-salad.jpg',
  },
  {
    name: 'Kanom Jeen Nam Ya',
    description:
      'Thai Noodle Curry Soup. Is a beloved Thai dish featuring thin fermented rice noodles (kanom jeen) served with a fragrant and flavorful curry sauce (nam ya). The curry is made with fish, coconut milk, and a blend of Thai herbs and spices. This dish is typically garnished with fresh vegetables, boiled eggs, and herbs, making it a light yet satisfying meal. ',
    img: '../../images/kanom-jeen.jpg',
  },
  {
    name: 'Khao Niew Mamuang',
    description:
      'Mango Sticky Riceis, is a classic Thai dessert known for its perfect harmony of flavors and textures. The dish combines sweet and sticky glutinous rice infused with coconut milk, ripe and juicy mango slices, and a drizzle of creamy coconut sauce, topped with crunchy mung beans or sesame seeds. It is simple yet indulgent, making it a must-try treat.',
    img: '../../images/mango.jpg',
  },
  {
    name: 'Gai Satay',
    description:
      'Satay is a popular dish in Thai cuisine, as well as in other Southeast Asian cuisines, particularly in Indonesia and Malaysia. Thai satay typically consists of marinated meat skewered on sticks, grilled to perfection, and served with a rich, creamy peanut sauce and a tangy cucumber relish called ajat.',
    img: '../../images/satay.jpg',
  },
  {
    name: 'Pad Krapow Moo Saap',
    description:
      'A popular Thai dish made with stir-fried minced pork (moo saap) and holy basil (krapow). Known for its bold, aromatic flavors, it combines garlic, chili, fish sauce, oyster sauce, and soy sauce to create a savory, spicy, and fragrant meal. Often topped with a fried egg (kai dao) and served with jasmine rice, it is a staple in Thai street food culture and a favorite for its simplicity and punchy taste.',
    img: '../../images/minced-pork.jpg',
  },
  {
    name: 'Kuay Teow Rua',
    description:
      'Traditionally served from boats in Bangkok’s canals, this flavorful soup is a harmonious blend of rich, aromatic broth, tender meat, and noodles.',
    img: '../../images/thai-boat-noodle.jpg',
  },
  {
    name: 'Kor Moo Yang',
    description:
      'Popular Isan (Northeast Thailand) dish featuring tender, juicy slices of grilled pork neck, known for its rich flavor and perfect balance of meat and fat. It is traditionally marinated with a blend of Thai seasonings, grilled to a smoky perfection, and served with Nam Jim Jaew, a tangy and spicy dipping sauce.',
    img: '../../images/kor-moo-grilled.jpg',
  },
];

// Function to load Thai foods dynamically
function loadThaiFoods(filter = '') {
  const contentSection = document.getElementById('thai-foods-content');
  contentSection.innerHTML = ''; // Clear the content area

  // Filter foods based on the search
  const filteredFoods = thaiFoods.filter((food) =>
    food.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Display each food item
  filteredFoods.forEach((food) => {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
    foodItem.innerHTML = `
      <h2>${food.name}</h2>
      <img src="${food.img}" alt="${food.name}">
      <p>${food.description}</p>
    `;
    contentSection.appendChild(foodItem);
  });

  // Show a message if no foods match the filter
  if (filteredFoods.length === 0) {
    contentSection.innerHTML =
      '<p>No dishes match your search. Try another term!</p>';
  }
}

// Event listener for search functionality
document.getElementById('searchBar').addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  loadThaiFoods(searchTerm);
});

// Load foods on page load
window.onload = () => {
  loadThaiFoods();
};
