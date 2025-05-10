## *📌 About This Project*  
This weather app is more than just a project—it’s a milestone in my programming journey. As a developer currently mastering *JavaScript*, I built this to:  
✅ *Apply functional programming principles* (pure functions, immutability, composition).  
✅ *Structure code using ES6 modules* for better organization and reusability.  
✅ *Work with real APIs* (OpenWeatherMap) to fetch and display dynamic data.  
✅ *Practice modern async/await* and error handling in a real-world scenario.  

This app reflects where I am right now: *comfortable with core JS, diving deeper into architecture, and committed to writing clean, maintainable code.*  

---

## *🛠 Tech Stack*  
- *Frontend*: Vanilla JavaScript (ES6+)  
- *Styling*: CSS3 (Flexbox/Grid)  
- *API*: [OpenWeatherMap](https://openweathermap.org/api)  
- *Build*: Vite (for fast development)  
- *Architecture: **Functional programming* + *Modular JS*  

---

## *⚡ Key Features*  
1. *🔍 Location-Based Weather*  
   - Fetches real-time weather data by city name.  
   - Displays temperature, humidity, wind speed, and conditions (sunny, rainy, etc.).  

2. *🧩 Functional JavaScript*  
   - *Pure functions* for data transformations (e.g., converting Kelvin to Celsius).  
   - *Immutability*: No side effects in state updates.  
   - *Higher-order functions* for reusable logic.  

3. *📦 Modular Codebase*  
   - Separated into logical modules:  
     - api.js – API requests  
     - dom.js – UI rendering  
     - utils.js – Helper functions (e.g., temp conversion) 
     - validation.js - User input 
   - Uses ES6 import/export for dependency management.  

4. *🔄 Error Handling*  
   - Graceful API failure messages (e.g., "City not found").  
   - Loading states for better UX.  

---

## *🚀 What I Learned*  
- *Functional Programming > OOP for this project*: Simplified state flow and reduced bugs.  
- *Why Modules Matter*: Code is easier to debug, test, and scale.  
- *The Power of Fetch + Async/Await*: Cleaner than callbacks or .then() chains.  
- *CSS Tricks*: Responsive layouts without a framework (media queries, CSS Grid).  

---

## *📥 Installation*  
1. Clone the repo:  
   bash  
   git clone https://github.com/ojfirst/weather-app.git  
     
2. Install dependencies:  
   bash  
   npm install  
     
3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to a .env file:  
   env  
   VITE_API_KEY= 'bd9d7d44f92d4f21f219a23eecee5e6a' 
     
4. Run the dev server:  
   bash  
   npm run dev  
     

---

## *🔮 Future Improvements*  
- [ ] Add a 5-day forecast feature.  
- [ ] Implement geolocation for automatic weather detection.  
- [ ] Add unit testing (Jest) for core functions.  

---

## *💡 Why This Project Stands Out*  
Unlike tutorial-based weather apps, this one:  
- *Uses zero dependencies* (no jQuery, React, etc.)—just vanilla JS.  
- *Prioritizes functional patterns* over imperative spaghetti code.  
- *Documents the "why"* behind architectural choices (like modules).  

---

*🌱 Built as part of my journey to becoming a better JavaScript developer.*  
Feedback welcome! 👉 [simonaina@outlook.com]  

---