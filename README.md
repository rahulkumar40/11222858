# 11222858
# 🚀 URL Shortener Web App (React + Vanilla CSS)

A simple and user-friendly URL shortener web application built with React and Vanilla CSS.

Users can shorten up to 5 URLs at once, customize shortcodes, set expiry time, and track statistics for each shortened link.

---

## 📄 Features

✅ Shorten long URLs (up to 5 at a time)
✅ Specify validity period (in minutes, default 30)
✅ Optionally add a custom shortcode (alphanumeric, unique)
✅ View list of shortened URLs with expiry and creation details
✅ Track click count and detailed click logs (timestamp, source, location)
✅ Responsive and simple design using plain CSS
✅ Client-side logging middleware (no console.log)

---

## 🗺️ Tech Stack

 ⚛️ React
 💅 Vanilla CSS (no Material UI)
 🛡️ React Router DOM

---

 💻 Screenshots
    - Desktop View of website 
    ![alt text](<Screenshot (122).png>)
        
- Mobile View 
    ![alt text](<Screenshot (123).png>)

### 🌟 Shorten URL Page
    ![alt text](<Screenshot (122).png>)

![Shorten URL Screenshot](https://via.placeholder.com/800x400?text=Shorten+URL+Page)

### 📊 Statistics Page

![Statistics Screenshot](https://via.placeholder.com/800x400?text=Statistics+Page)

---

## ⚙️ Installation

### 🟢 Clone the repository

```bash
git clone https://github.com/your-username/url-shortener-app.git
cd url-shortener-app
```

### 🟢 Install dependencies

```bash
npm install
```

### 🟢 Run the app locally

```bash
npm start
```

> 🌍 The app runs at [http://localhost:5173](http://localhost:5173)

---

## 🚦 **How to Use**

### ✅ Shorten URLs

1. Go to `/` (Home page).
2. Enter long URL (e.g., `https://www.google.com`).
3. Set validity period (optional, defaults to 30 min).
4. Provide a custom shortcode (optional).
5. Click **Shorten**.
6. Your shortened links will appear below with expiry details.

### ✅ Test redirects

* Click on the generated short URL → You will be redirected to the original URL.
* Click logs will be updated automatically.

### ✅ View statistics

1. Navigate to `/stats` (Statistics page).
2. See list of all shortened URLs, click counts, and detailed logs.

---

## 🧑‍💻 Development structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── UrlShortenerPage.js
│   ├── UrlStatisticsPage.js
│   ├── RedirectHandler.js
├── services/
│   ├── urlService.js
│   └── loggingService.js
├── App.js
├── App.css
├── index.js
```

---

## ✅ Key Design Choices

- In-memory storage for URL data (not persisted on refresh).
All routes handled client-side via React Router.
- Logs stored in a custom logging     middleware (not console.log).
- Simple, clean design using only CSS for easy customization.

---

## 💡 Future Improvements

- Add localStorage or backend to persist URL data across reloads.
- Add real geo-location tracking for clicks.
- Add user authentication to manage personal links.
- Add QR code generation for each short URL.

---

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

