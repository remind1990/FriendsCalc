import FriendsList from './FriendsList';
import FormAddFriend from './forms/FormAddFriend';
import SharedButton from './sharedComponents/SharedButton';
import FormSplitBill from './forms/FormSplitBill';
import { useState } from 'react';
import { initialFriends } from './data';
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setshowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setshowAddFriend((showAddFriend) => !showAddFriend);
  };

  const handleAddNewFriend = (newFriend) => {
    const friendAlreadyExist = friends.find(
      (friend) => friend.id === newFriend.id
    );
    if (friendAlreadyExist) return;
    setFriends((prevState) => [...prevState, newFriend]);
    setshowAddFriend(false);
  };

  const handleSelected = (friend) => {
    setSelectedFriend((selected) =>
      selected?.id === friend?.id ? null : friend
    );
    setshowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelected}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend addFriend={handleAddNewFriend} />
        )}
        <SharedButton onClick={handleShowAddFriend}>
          {showAddFriend ? 'close' : 'Add Friend'}
        </SharedButton>
      </div>
      {selectedFriend && (
        <FormSplitBill
          {...selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
