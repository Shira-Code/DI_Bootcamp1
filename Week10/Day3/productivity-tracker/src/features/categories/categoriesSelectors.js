// src/features/CategorySelector.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '.features/categories/categoriesSlice'; 

const CategorySelector = () => {
  const dispatch = useDispatch();

  const handleAddCategory = (category) => {
    dispatch(addCategory(category));
  };

  return (
    <div>
      <button onClick={() => handleAddCategory({ id: 'newId', name: 'New Category' })}>
        Add Category
      </button>
    </div>
  );
};

export default CategorySelector;
