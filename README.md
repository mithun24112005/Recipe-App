## 🍽️ Recipe App

A beautiful, responsive recipe search application built using **HTML**, **CSS**, and **JavaScript** that fetches data from [TheMealDB API](https://www.themealdb.com/api.php). Users can search for recipes, view ingredients, and read cooking instructions — all in a smooth popup interface.

---

### 🚀 Features

* 🔎 **Search Recipes** by name using a live API.
* 📷 **Displays Meal Image**, Category, Region, and more.
* 📋 **View Ingredients** and **Step-by-Step Instructions**.
* 💡 **Popup Modal** for detailed recipe information.
* 💅 **Responsive & Stylish UI** for both desktop and mobile.
* 🔄 **Error Handling** for empty or failed searches.

---

### 🛠️ Technologies Used

* **HTML5** – Markup structure
* **CSS3** – Styling and responsive design
* **Vanilla JavaScript (ES6)** – Logic and DOM manipulation
* **[TheMealDB API](https://www.themealdb.com/api.php)** – Data source

---

### 🧠 How It Works

* The search input is tied to a `click` event on the search button.
* It makes a `fetch()` request to TheMealDB API with the search query.
* Meals are dynamically displayed with name, image, area, and category.
* Clicking **"View Recipe"** opens a modal with:

  * Ingredients (parsed from 20 potential fields).
  * Cooking instructions.

---

### 📜 License

This project is open-source and free to use for educational purposes.
