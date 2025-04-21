import { useState } from "react";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

// Initial friends data to populate the app on load
// Each friend has a unique id, name, avatar image, and balance
// Negative balance: User owes money to friend
// Positive balance: Friend owes money to user
// Zero balance: No debts between user and friend
const initialFriends = [
  {
    id: 118836,
    name: "Raj",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Arya",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Tony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // Main state variables for the application
  const [friends, setFriends] = useState(initialFriends); // Tracks all friends
  const [showAddFriend, setShowAddFriend] = useState(false); // Controls visibility of add friend form
  const [selectedFriend, setSelectedFriend] = useState(null); // Tracks currently selected friend for bill splitting

  // Adds a new friend to the friends list and hides the add friend form
  // Called from FormAddFriend component when form is submitted
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Toggles friend selection - if already selected, deselects them
  // Otherwise selects the friend for bill splitting
  // Also closes the add friend form when a friend is selected
  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Updates the balance between user and selected friend after bill split
  // Value is positive if friend owes user, negative if user owes friend
  // Called from FormSplitBill component when form is submitted
  // Updates only the selected friend's balance and clears selection afterward
  function handleSpiltBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      {/* Left sidebar containing friends list and add friend functionality */}
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelected={handleSelectedFriend}
        />

        {/* Conditionally render add friend form only when showAddFriend is true */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/* Toggle button for showing/hiding add friend form */}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {/* Right panel - conditionally renders bill splitting form when a friend is selected */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSpiltBill}
        />
      )}
    </div>
  );
}
