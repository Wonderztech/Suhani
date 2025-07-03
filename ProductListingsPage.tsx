import React, { useState } from 'react';
// ProductDetailPage is no longer directly rendered here, navigation is handled by App.tsx
// import ProductDetailPage from './ProductDetailPage';

// Re-using Product interface from App.tsx for consistency (or move to a shared types file)
export interface Product {
  id: string;
  name: string;
  price: string; // Display price
  image: string;
  images?: string[];
  description?: string;
  category: string;
}

// Placeholder product data (can be fetched from an API later)
// Ensured descriptions are present for ProductDetailPage
const products: Product[] = [
  { id: 'plp-1', name: 'Elegant Maroon Lehenga', price: '₹65,000', image: 'https://readdy.ai/api/search-image?query=Elegant%20Indian%20bride%20wearing%20a%20luxurious%20deep%20maroon%20and%20gold%20lehenga%2C%20full%20shot%2C%20studio%20lighting&width=400&height=500&seq=20', category: 'Bridal', description: "A breathtaking maroon lehenga with intricate gold embroidery, perfect for a grand bridal look. This ensemble features rich velvet fabric and detailed zardozi work, ideal for making a statement on your special day." },
  { id: 'plp-2', name: 'Pastel Green Anarkali', price: '₹48,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20pastel%20green%20Anarkali%20suit%2C%20ethnic%20wear%2C%20full%20shot%2C%20outdoor%20setting&width=400&height=500&seq=21', category: 'Festive', description: "Elegant pastel green Anarkali suit in georgette, adorned with delicate chikankari embroidery and pearl accents. Perfect for festive celebrations, weddings, and special occasions." },
  { id: 'plp-3', name: 'Royal Blue Sharara Set', price: '₹52,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20royal%20blue%20sharara%20set%2C%20ethnic%20wear%2C%20full%20shot%2C%20event%20setting&width=400&height=500&seq=22', category: 'Festive', description: "A regal royal blue sharara set crafted from silk, featuring gota patti work and a matching dupatta. This outfit exudes grace and sophistication, suitable for sangeet or reception events." },
  { id: 'plp-4', name: 'Ivory & Gold Gown', price: '₹75,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20ivory%20and%20gold%20Indo-Western%20gown%2C%20full%20shot%2C%20glamorous%20setting&width=400&height=500&seq=23', category: 'Indo-Western', description: "Stunning ivory and gold Indo-Western gown with a contemporary silhouette. Features intricate sequin work and a flowing train, perfect for cocktail parties or modern receptions." },
  { id: 'plp-5', name: 'Crimson Silk Saree', price: '₹40,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20crimson%20silk%20saree%2C%20traditional%20wear%2C%20full%20shot%2C%20temple%20background&width=400&height=500&seq=24', category: 'Bridal', description: "A classic crimson silk saree, handwoven with a traditional gold zari border. This timeless piece embodies elegance and is perfect for bridal trousseaus or significant cultural events." },
  { id: 'plp-6', name: 'Mustard Yellow Kurta Set', price: '₹35,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20mustard%20yellow%20kurta%20set%2C%20ethnic%20wear%2C%20full%20shot%2C%20casual%20setting&width=400&height=500&seq=25', category: 'Festive', description: "Bright and cheerful mustard yellow kurta set in chanderi fabric, featuring block prints and mirror work. Comes with matching pants and a dupatta, ideal for haldi ceremonies or daytime festivities." },
  { id: 'plp-7', name: 'Black Velvet Lehenga', price: '₹80,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20black%20velvet%20lehenga%2C%20bridal%20wear%2C%20full%20shot%2C%20dramatic%20lighting&width=400&height=500&seq=26', category: 'Bridal', description: "Luxurious black velvet lehenga adorned with contrasting silver and crystal embroidery. This opulent piece is perfect for a statement bridal ensemble or a grand evening reception." },
  { id: 'plp-8', name: 'Rose Gold Cape Dress', price: '₹60,000', image: 'https://readdy.ai/api/search-image?query=Woman%20in%20rose%20gold%20Indo-Western%20cape%20dress%2C%20full%20shot%2C%20party%20setting&width=400&height=500&seq=27', category: 'Indo-Western', description: "Chic rose gold Indo-Western cape dress. The dress is crafted from shimmer georgette with an attached embroidered cape, perfect for a glamorous evening or a modern sangeet look." },
];

interface ProductListingsPageProps {
  onNavigate: (page: 'productDetail', product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductListingsPage: React.FC<ProductListingsPageProps> = ({ onNavigate, onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('default');
  // selectedProduct state is removed as navigation is handled by App.tsx

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleFilterChange = (category: string) => {
    let newFilters: string[];
    if (category === 'All') {
      newFilters = [];
    } else {
      if (activeFilters.includes(category)) {
        newFilters = activeFilters.filter(f => f !== category);
      } else {
        newFilters = [...activeFilters, category];
      }
    }
    setActiveFilters(newFilters);
    applyFiltersAndSort(newFilters, sortOption);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    applyFiltersAndSort(activeFilters, newSortOption);
  };

  const applyFiltersAndSort = (filters: string[], sortBy: string) => {
    let tempProducts = [...products];

    // Apply category filters
    if (filters.length > 0) {
      tempProducts = tempProducts.filter(p => filters.includes(p.category));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        tempProducts.sort((a, b) => parseFloat(a.price.replace('₹', '').replace(',', '')) - parseFloat(b.price.replace('₹', '').replace(',', '')));
        break;
      case 'price-desc':
        tempProducts.sort((a, b) => parseFloat(b.price.replace('₹', '').replace(',', '')) - parseFloat(a.price.replace('₹', '').replace(',', '')));
        break;
      case 'name-asc':
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default or 'featured' - can be implemented if there's a specific logic for featured items
        break;
    }
    setFilteredProducts(tempProducts);
  };

  const handleViewDetails = (product: Product) => {
    // Navigation to detail page is now handled by the onNavigate prop
    // setSelectedProduct(product);
  };

  // This is also handled by App.tsx now
  // const handleBackToListing = () => {
  //   setSelectedProduct(null);
  // };

  // Conditional rendering of ProductDetailPage is removed, App.tsx handles page views
  // if (selectedProduct) {
  //   return <ProductDetailPage product={selectedProduct} onBackToListing={handleBackToListing} />;
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h1>

      {/* Filters and Sorting Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg shadow">
        {/* Category Filters */}
        <div className="mb-4 md:mb-0">
          <span className="font-medium mr-4">Filter by Category:</span>
          <div className="inline-flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer transition-colors duration-300
                  ${(activeFilters.length === 0 && category === 'All') || activeFilters.includes(category) ? 'bg-[#D4AF37] text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div>
          <label htmlFor="sort-options" className="font-medium mr-2">Sort by:</label>
          <select
            id="sort-options"
            value={sortOption}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group border rounded-lg shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onNavigate('productDetail', product)} // Use onNavigate prop
                    className="bg-white text-gray-800 p-3 rounded-full mx-1 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer text-sm">
                    <i className="fas fa-eye"></i> {/* View Details */}
                  </button>
                  <button className="bg-white text-gray-800 p-3 rounded-full mx-1 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer text-sm">
                    <i className="fas fa-heart"></i> {/* Add to Wishlist - Placeholder */}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium mb-1 truncate" title={product.name}>{product.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-2">{product.price}</p>
                <button
                  onClick={() => onAddToCart(product)} // Use onAddToCart prop
                  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListingsPage;
