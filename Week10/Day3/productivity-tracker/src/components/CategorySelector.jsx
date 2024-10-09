import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, addCategory, deleteCategory, editCategory } from '../features/categories/categoriesSlice';

const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(Number(event.target.value));
  };

  const handleAddCategory = () => {
    const newCategory = { id: Date.now(), name: 'New Category' }; // Sample new category
    dispatch(addCategory(newCategory));
  };

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(selectedCategoryId));
  };

  const handleEditCategory = (id, newName) => {
    dispatch(editCategory({ id, name: newName }));
  };

  return (
    <div>
      <h2>Select Category</h2>
      <select value={selectedCategoryId} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddCategory}>Add Category</button>
      <button onClick={handleDeleteCategory}>Delete Selected Category</button>
      <button onClick={() => handleEditCategory(selectedCategoryId, 'Updated Category Name')}>
        Edit Selected Category
      </button>
    </div>
  );
};

export default CategorySelector;
