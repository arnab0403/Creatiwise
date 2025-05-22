# Dashboard Project

This is a React-based dashboard project using [shadcn/ui](https://ui.shadcn.com/) components, React Router, and custom components for article management.

## Features

- Responsive sidebar navigation
- Article management with categorized navigation buttons
- Data table with drag-and-drop, selection, and custom cell viewers
- Suspense and lazy loading for performance
- Organized folder structure separating shadcn/ui and custom components

## Folder Structure

```
src/
  components/
    ui/           # shadcn/ui components
    app-sidebar.jsx
    site-header.jsx
    ...
  components/custom/
    Home.jsx      # Main dashboard page
    Table.jsx     # Data table component
    Dummy.jsx     # Dummy placeholder page
    Loader.jsx
    ...
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Routing

- `/` — Main dashboard (Home)
- `/general-articles` — General Articles page
- `/published-articles` — Published Articles page
- `/scheduled-articles` — Scheduled Articles page
- `/archived-articles` — Archived Articles page

## Customization

- Place your own components in `src/components/custom/` to keep them separate from shadcn/ui updates.
- Update navigation routes in `Home.jsx` as needed.

## Notes

- Make sure your app is wrapped in a `<BrowserRouter>` in your entry point (e.g., `index.js`).
- The project uses Tailwind CSS for styling and responsiveness.
- The data table expects data fields: `article`, `keyword`, `words`, `created`, `action`, `company`.

---

**Happy coding!**
