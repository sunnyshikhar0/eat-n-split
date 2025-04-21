import { useState } from "react";
import Button from "./Button";

/**
 * Form component for adding new friends to the friends list
 *
 * This component is conditionally rendered in App.js when the user clicks
 * the "Add Friend" button. It captures name and image URL inputs and
 * creates a new friend entry with a zero balance.
 *
 * @param {Function} onAddFriend - Callback function from App.js that receives the new friend object
 */
export default function FormAddFriend({ onAddFriend }) {
  // State for form inputs with default values
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handles form submission to create a new friend
   *
   * 1. Prevents default form submission behavior
   * 2. Validates that required fields are filled
   * 3. Generates a unique ID for the friend
   * 4. Creates a friend object with the input values
   * 5. Passes the new friend to the parent component via callback
   * 6. Resets form fields to their default values
   *
   * @param {Event} e - The form submission event
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation - both fields must have values
    if (!name || !image) return;

    // Generate unique ID for the friend and their avatar
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // Appends ID as query param to get unique avatar
      balance: 0, // New friends start with zero balance
    };

    // Send new friend to App.js to be added to friends state
    onAddFriend(newFriend);

    // Reset form fields
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👺 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>👹 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Reusable Button component from Button.js */}
      <Button>Add</Button>
    </form>
  );
}
