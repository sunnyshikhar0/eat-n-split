import Friend from "./Friend";

/**
 * FriendsList component for rendering all friends in the sidebar
 *
 * This component serves as a container for individual Friend components,
 * mapping through the friends array and rendering each friend with the
 * necessary props. It acts as an intermediary between App.js and the
 * individual Friend components.
 *
 * @param {Array} friends - Array of friend objects from App.js state
 * @param {Object|null} selectedFriend - Currently selected friend for bill splitting
 * @param {Function} onSelected - Callback function (handleSelectedFriend in App.js)
 *                               that toggles friend selection
 * @returns {JSX.Element} An unordered list containing Friend components
 */
export default function FriendsList({ friends, selectedFriend, onSelected }) {
  return (
    <ul>
      {/* Map through each friend in the array and render a Friend component */}
      {/* Each Friend component receives the friend object, selection state, and callback */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id} // React key for efficient list rendering
          selectedFriend={selectedFriend}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}
