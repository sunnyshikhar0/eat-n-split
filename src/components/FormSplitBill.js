import { useState } from "react";
import Button from "./Button";

/**
 * Form component for splitting bills with a selected friend
 *
 * This component appears in the right panel of the app when a friend is selected.
 * It allows the user to enter bill details and calculate how much each person owes.
 *
 * @param {Object} selectedFriend - The currently selected friend object from App.js
 * @param {Function} onSplitBill - Callback function to update the friend's balance in App.js
 */

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  // State variables to track form input values
  const [bill, setBill] = useState(""); // Total bill amount
  const [paidByUser, setPaidByUser] = useState(""); // User's portion of the bill
  const paidByFriend = bill ? bill - paidByUser : ""; // Friend's portion (calculated automatically)
  const [whoPaid, setWhoPaid] = useState("user"); // Who physically paid the bill (user or friend)

  /**
   * Handles form submission to update balances
   *
   * 1. Prevents default form submission behavior
   * 2. Validates that required fields are filled
   * 3. Calculates balance update based on who paid:
   *    - If user paid: Friend owes their portion (positive value sent to App.js)
   *    - If friend paid: User owes their entire portion (negative value sent to App.js)
   *
   * @param {Event} e - The form submission event
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation - both fields must have values
    if (!bill || !paidByUser) return;

    // Calculate balance update and pass to App.js
    // If user paid, friend owes paidByFriend amount (positive)
    // If friend paid, user owes paidByUser amount (negative)
    onSplitBill(whoPaid === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

      {/* Total bill amount field */}
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      {/* User's portion of the bill */}
      <label>🤦🏻‍♂️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            // Prevents user expense from exceeding total bill amount
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          )
        }
      />

      {/* Friend's portion (calculated automatically, read-only) */}
      <label>🥲 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      {/* Who physically paid the bill selector */}
      <label>😼 Who is paying the bill</label>
      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      {/* Submit button using the shared Button component */}
      <Button>Split bill</Button>
    </form>
  );
}
