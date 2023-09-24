import SharedButton from './sharedComponents/SharedButton';
export default function FriendsList({
  friends,
  onSelect,
  selectedFriend,
}) {
  if (friends.length === 0)
    return <h1>you have no friends looser</h1>;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, selectedFriend }) {
  const { name, image, balance, id } = friend;
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={image} alt="friend" />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red bold">
          You owe {name} {Math.abs(balance)} 🇨🇦💲
        </p>
      )}
      {balance > 0 && (
        <p className="green bold">
          {name} ows {Math.abs(balance)} 🇨🇦💲
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <SharedButton onClick={(e) => onSelect(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </SharedButton>
    </li>
  );
}
