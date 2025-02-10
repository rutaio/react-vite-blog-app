import { useState } from 'react';
import axios from 'axios';
import { api } from '../constants/globalConstants';

export const CreateBlog = () => {
  // issitraukiam reiksmes blog.name ir blog.description
  //   axios.post: siunciam i db.json - sukurti nauja irasa su db.json

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(api, {
      name,
      description,
    });

    window.location.reload();
  };

 
  return (

    <form className="create-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog name"
        required
        onChange={(event) => setName(event.target.value)}
      />
      <textarea
        placeholder="Blog description"
        required
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button type="submit">Create post</button>
    </form>
  );
};
