import Button from "./Button";

/**
 * Friend component for displaying a single friend in the friends list
 *
 * This component renders an individual friend item with their:
 * - Profile image
 * - Name
 * - Balance status (color-coded and with appropriate message)
 * - Select/Close button for bill splitting functionality
 *
 * It's used as a child component of FriendsList and connects to App.js
 * through passed-down props and callbacks.
 *
 * @param {Object} friend - The friend object with id, name, image, and balance
 * @param {Object|null} selectedFriend - Currently selected friend object (or null if none selected)
 * @param {Function} onSelected - Callback to handle friend selection in parent component
 */
export default function Friend({ friend, selectedFriend, onSelected }) {
  // Determines if this specific friend is currently selected
  // Used for styling and button text changes
  const isSelected = selectedFriend && friend.id === selectedFriend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      {/* Friend's profile image */}
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* Conditional rendering based on balance status */}
      {/* Negative balance: User owes money to this friend */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}₹
        </p>
      )}
      {/* Positive balance: Friend owes money to user */}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}₹
        </p>
      )}
      {/* Zero balance: No debts between user and friend */}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* Button toggles between "Select" and "Close" based on selection state */}
      {/* When clicked, calls onSelected callback in App.js to either:
          - Select this friend for bill splitting, or
          - Deselect this friend if already selected */}
      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
