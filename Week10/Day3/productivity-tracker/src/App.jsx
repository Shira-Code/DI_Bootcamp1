import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './app/store'; 
import { fetchCategories, setSelectedCategoryId } from './features/categories/categoriesSlice'; // Adjust path as necessary
import Category from './components/CategorySelector'; 

const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        <h1>Category List</h1>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Provider>
  );
};

export default App;
