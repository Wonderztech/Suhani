import React from 'react';

// Ensure Product interface is consistent or imported from a shared types file
export interface Product { // Exporting to ensure it can be used by App.tsx if it were separate
  id: string;
  name: string;
  price: string; // Display price
  image: string; // Main image
  images?: string[]; // Optional array of additional images
  description?: string;
  category?: string;
  // Potentially add more fields like sizes, colors, materials, etc.
}

interface ProductDetailPageProps {
  product: Product;
  onBackToListing: () => void; // Function to go back to product listings
  onAddToCart: (product: Product) => void; // Function to add product to cart
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBackToListing, onAddToCart }) => {
  const { name, price, image, images, description } = product;
  const displayImages = [image, ...(images || [])]; // Combine main image with additional images

  // Placeholder description if not provided
  const productDescription = description || "Detailed information about this exquisite product, including craftsmanship, materials, and care instructions, will be available here soon. This piece is a testament to traditional artistry blended with contemporary design, perfect for making a statement at any occasion.";

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBackToListing}
        className="mb-8 inline-flex items-center text-[#D4AF37] hover:underline"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <img
            src={displayImages[0]} // For now, just showing the main image
            alt={name}
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
          />
          {/* TODO: Add a small gallery for additional images if displayImages.length > 1 */}
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{name}</h1>
          <p className="text-[#D4AF37] text-2xl font-medium mb-6">{price}</p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{productDescription}</p>
          </div>

          {/* TODO: Add sections for size selection, color options, quantity, etc. */}

          <button
            onClick={() => onAddToCart(product)} // Use onAddToCart prop
            className="w-full bg-[#D4AF37] text-white px-8 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer whitespace-nowrap text-lg"
          >
            Add to Cart
          </button>

          <div className="mt-6 flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-[#D4AF37]">
              <i className="fas fa-heart mr-2"></i> Add to Wishlist
            </button>
            {/* <button className="flex items-center text-gray-600 hover:text-[#D4AF37]">
              <i className="fas fa-share-alt mr-2"></i> Share
            </button> */}
          </div>
        </div>
      </div>

      {/* TODO: Add sections for related products, customer reviews, etc. */}
    </div>
  );
};

export default ProductDetailPage;
