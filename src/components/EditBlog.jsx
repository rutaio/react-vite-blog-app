import { useState } from 'react';
import axios from 'axios';
import { api } from '../constants/globalConstants';

// per cia siunciu is sito vaikinio elemento i tevini callback'a:
export const EditBlog = ({ handleCancelClick, blogContent }) => {
  // norim kad atvaizduotu ne tuscius stringus (kaip CreatePost), bet musu redaguojamus duomenis:
  const [name, setName] = useState(blogContent.name);
  const [description, setDescription] = useState(blogContent.description);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`${api}/${blogContent.id}`, {
      name,
      description,
    });

    window.location.reload();
  };

  return (
    <form className="edit-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog name"
        // isidedam redaguojamo posto reiksme:
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />

      <textarea
        placeholder="Blog description"
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>

      <button type="submit">Save changes</button>

      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </form>
  );
};
