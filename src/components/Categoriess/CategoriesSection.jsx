import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../Loading/LOading';
// import Subcategories from '../Subcategories/Subcategories';
 


export default function CategoriesSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [categoriess, setCategoriess] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategoriess() {
    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/Categories');
      setCategoriess(response.data.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoriess();
  }, []);

  const handleSubCatgClick = (categoryId, categoryName,e) => {
    e.stopPropagation();
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(categoryName);
  }
  
  return (
    <div className='mt-24 text-center'>
      {loading ? (
        <div className='flex justify-center items-center min-h-screen'>
         <Loading/>
        </div>
      ) : (
        <>
          <div className="grid gap-5 mt-16 lg:grid-cols-3 md:grid-cols-2 container">
            {categoriess.map(category => (
              <div key={category._id} onClick={(e) => handleSubCatgClick(category._id,category.name, e)}>
                <div className="product bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
                  <img className="rounded-t-lg h-[300px] w-full object-cover" src={category.image} alt={category.name} />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{category.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* {selectedCategoryId && selectedCategoryName && (
            <Subcategories id={selectedCategoryId} name={selectedCategoryName} />
          )} */}
        </>
      )}
    </div>
  )
}
