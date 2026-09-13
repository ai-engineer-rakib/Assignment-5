# Dev Stack Builder Website

A modern, responsive web application for developers to explore technologies, compare frameworks, and curate custom development stacks.

## 🚀 Technologies Used

- React.js (Vite)
- Tailwind CSS
- React-Toastify
- JavaScript (ES6+)
- JSON

## ✨ Core Features

1. **Interactive Stack Builder:** Add multiple technologies to a dedicated sidebar with duplication checks and single-item/bulk removal.
2. **Responsive Layout & Gradient Brand Theme:** Fully optimized across mobile, tablet, and desktop views featuring a unified orange-to-violet brand theme.
3. **Real-time Feedback & Toast Notifications:** Interactive feedback powered by React-Toastify for duplicate additions, removals, and selection updates.

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets developers write HTML-like code directly inside JavaScript files. It is used because it makes React component structures readable, visual, and expressive while keeping UI logic and markup closely coupled.

### 2. What is the difference between props and state?

- **Props (Properties):** Read-only data passed from a parent component down to a child component to configure it.
- **State:** Internal data managed within the component that can change over time based on user interactions, triggering re-renders.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook adds local reactive state to functional components. In this project, it is used to hold the list of technologies loaded from JSON (`technologies`), maintain selected items in the user's stack (`myStack`), manage the data fetching spinner (`loading`), and toggle the mobile navigation menu (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects in React components, such as API calls, subscriptions, or DOM mutations. In this project, it was required to asynchronously fetch the local `/technologies.json` file once when the page initially mounts without blocking component rendering.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique `key` prop to identify which items have changed, been added, or been removed during Virtual DOM reconciliation. Without unique keys, React cannot efficiently update the DOM list and performance issues or state bugs may occur.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements or components based on whether a particular condition evaluates to true or false. In this project, it was used inside the sidebar:

```jsx
{myStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  myStack.map(...)
)}
```
