import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = () => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: '', category: '', description: '', price: '', stock: '' });
  };

  const editProduct = (productId, updatedProduct) => {
    setProducts(products.map((p) => (p.id === productId ? updatedProduct : p)));
    setEditingProduct(null);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const startEditProduct = (product) => {
    setEditingProduct(product);
  };

  // Filter products by category
  const flowerProducts = products.filter((product) => product.category.toLowerCase() === 'flower');
  const plantProducts = products.filter((product) => product.category.toLowerCase() === 'plant');

  return (
    <section className="p-6">
      {/* Add New Product Form */}
      <div className="bg-white p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={editingProduct ? editingProduct.name : newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            value={editingProduct ? editingProduct.category : newProduct.category}
            onChange={handleInputChange}
            placeholder="Category (flower or plant)"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="price"
            value={editingProduct ? editingProduct.price : newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="stock"
            value={editingProduct ? editingProduct.stock : newProduct.stock}
            onChange={handleInputChange}
            placeholder="Stock Quantity"
            className="p-2 border rounded"
          />
        </div>

        <textarea
          name="description"
          value={editingProduct ? editingProduct.description : newProduct.description}
          onChange={handleInputChange}
          placeholder="Product Description"
          className="w-full mt-4 p-2 border rounded"
        />

        <button
          className={`mt-4 px-4 py-2 rounded ${editingProduct ? 'bg-green-500' : 'bg-blue-500'} text-white`}
          onClick={() => (editingProduct ? editProduct(editingProduct.id, editingProduct) : addProduct())}
        >
          {editingProduct ? 'Update Product' : 'Add Product'} <FaPlus className="inline ml-2" />
        </button>
      </div>

      {/* Flowers Section */}
      <h3 className="text-lg font-semibold mb-4">Flowers</h3>
      <div className="bg-white p-6 shadow-lg mb-8">
        {flowerProducts.length === 0 ? (
          <p>No flowers available. Start by adding a product.</p>
        ) : (
          <ul className="space-y-4">
            {flowerProducts.map((product) => (
              <li key={product.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm">Category: {product.category}</p>
                  <p className="text-sm">Price: ${product.price}</p>
                  <p className="text-sm">Stock: {product.stock}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="p-2 bg-yellow-400 text-white rounded"
                    onClick={() => startEditProduct(product)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded"
                    onClick={() => removeProduct(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Plants Section */}
      <h3 className="text-lg font-semibold mb-4">Plants</h3>
      <div className="bg-white p-6 shadow-lg">
        {plantProducts.length === 0 ? (
          <p>No plants available. Start by adding a product.</p>
        ) : (
          <ul className="space-y-4">
            {plantProducts.map((product) => (
              <li key={product.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm">Category: {product.category}</p>
                  <p className="text-sm">Price: ${product.price}</p>
                  <p className="text-sm">Stock: {product.stock}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="p-2 bg-yellow-400 text-white rounded"
                    onClick={() => startEditProduct(product)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded"
                    onClick={() => removeProduct(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProductManagement;
