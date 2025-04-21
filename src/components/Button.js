export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
/**
 * Reusable Button component used throughout the application
 *
 * This component creates a standardized button with consistent styling
 * and behavior across the application. It's used in multiple contexts:
 * - In App.js: Toggle button for showing/hiding the "Add Friend" form
 * - In Friend.js: Select/Close buttons for each friend in the list
 * - In FormAddFriend.js: Submission button for adding a new friend
 * - In FormSplitBill.js: Submission button for processing bill splits
 *
 * @param {Function} onClick - Function to execute when button is clicked
 * @param {ReactNode} children - Content to render inside the button (text/elements)
 * @returns {JSX.Element} A styled button element with attached onClick handler
 */
