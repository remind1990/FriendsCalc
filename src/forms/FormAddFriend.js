import { useState } from 'react';
import SharedButton from '../sharedComponents/SharedButton';

export default function FormAddFriend({ addFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');
  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();

        if (!name || !image) return;
        const id = crypto.randomUUID();
        const newFiend = {
          name,
          image: `${image}?=${id}`,
          banalce: 0,
          id,
        };
        addFriend(newFiend);
        setName('');
        setImage('https://i.pravatar.cc/48');
      }}
    >
      <label>👯‍♀️ Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> 🎇 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <SharedButton>Add</SharedButton>
    </form>
  );
}
