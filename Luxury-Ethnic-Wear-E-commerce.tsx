// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [email, setEmail] = useState('');
const [activeCategory, setActiveCategory] = useState('all');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [cartItems, setCartItems] = useState<number>(0);
const [showToast, setShowToast] = useState(false);
const [selectedProduct, setSelectedProduct] = useState<{
  name: string;
  price: string;
  image: string;
} | null>(null);

const handleAddToCart = (product: { name: string; price: string; image: string }) => {
  setCartItems(prev => prev + 1);
  setSelectedProduct(product);
  setShowToast(true);
  setTimeout(() => setShowToast(false), 3000);
};
const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setEmail(e.target.value);
};
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Newsletter subscription logic would go here
setEmail('');
alert('Thank you for subscribing to our newsletter!');
};
return (
<div className="min-h-screen bg-white text-gray-800 font-sans">
{/* Header */}
<header className="sticky top-0 z-50 bg-white shadow-sm">
<div className="container mx-auto px-4 py-4">
<div className="flex items-center justify-between">
<div className="lg:w-1/3 flex items-center">
<button
className="lg:hidden mr-4 cursor-pointer"
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className="fas fa-bars text-xl"></i>
</button>
<div className="hidden lg:flex space-x-6">
<a href="#" className="text-sm hover:text-gold-600 transition-colors duration-300 cursor-pointer whitespace-nowrap">BRIDAL</a>
<a href="#" className="text-sm hover:text-gold-600 transition-colors duration-300 cursor-pointer whitespace-nowrap">FESTIVE</a>
<a href="#" className="text-sm hover:text-gold-600 transition-colors duration-300 cursor-pointer whitespace-nowrap">INDO-WESTERN</a>
</div>
</div>
<div className="lg:w-1/3 flex justify-center">
<a href="#" className="font-serif text-2xl md:text-3xl font-bold cursor-pointer">
Suhani Kapoor Designs
</a>
</div>
<div className="lg:w-1/3 flex justify-end space-x-4">
<a href="#" className="cursor-pointer">
<i className="fas fa-search text-lg"></i>
</a>
<a href="#" className="cursor-pointer">
<i className="fas fa-user text-lg"></i>
</a>
<a href="#" className="cursor-pointer">
<i className="fas fa-heart text-lg"></i>
</a>
<a href="#" className="cursor-pointer relative">
<i className="fas fa-shopping-bag text-lg"></i>
{cartItems > 0 && (
  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
    {cartItems}
  </span>
)}
</a>
</div>
</div>
</div>
{/* Mobile Menu */}
<div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md absolute w-full`}>
<div className="container mx-auto px-4 py-4">
<ul className="space-y-4">
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">BRIDAL</a></li>
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">FESTIVE</a></li>
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">INDO-WESTERN</a></li>
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">NEW ARRIVALS</a></li>
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">CUSTOM ORDERS</a></li>
<li><a href="#" className="block py-2 hover:text-gold-600 transition-colors duration-300 cursor-pointer">CONTACT</a></li>
</ul>
</div>
</div>
</header>
<main>
{/* Hero Section */}
<section className="relative h-[600px] md:h-[700px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20bride%20wearing%20a%20luxurious%20deep%20maroon%20and%20gold%20lehenga%20with%20intricate%20embroidery%2C%20standing%20in%20a%20minimalist%20setting%20with%20soft%20lighting%2C%20professional%20fashion%20photography%20with%20shallow%20depth%20of%20field%2C%20high-end%20ethnic%20wear%2C%20luxury%20bridal%20collection&width=1440&height=700&seq=1&orientation=landscape"
alt="Luxury Ethnic Wear Collection"
className="absolute inset-0 w-full h-full object-cover object-top"
/>
<div className="relative z-20 container mx-auto px-4 h-full flex items-center">
<div className="max-w-xl">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4">
Timeless Elegance, <br />Contemporary Design
</h1>
<p className="text-white text-lg md:text-xl mb-8">
Discover our handcrafted luxury ethnic wear for the modern woman
</p>
<a
href="#"
className="inline-block bg-[#D4AF37] text-white px-8 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Shop the Collection
</a>
</div>
</div>
</section>
{/* Category Sections */}
<section className="py-16 bg-[#FAF9F6]">
<div className="container mx-auto px-4">
<h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-12">Our Collections</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Bridal Collection */}
<div className="group relative overflow-hidden rounded-lg shadow-lg h-[500px]">
<img
src="https://readdy.ai/api/search-image?query=Stunning%20Indian%20bridal%20lehenga%20in%20deep%20maroon%20with%20gold%20embroidery%2C%20luxury%20ethnic%20wear%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20bridal%20collection%2C%20detailed%20craftsmanship%20visible&width=500&height=500&seq=2&orientation=portrait"
alt="Bridal Collection"
className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
<h3 className="font-serif text-2xl text-white font-bold mb-2">Bridal Collection</h3>
<p className="text-white text-sm mb-4">Exquisite handcrafted pieces for your special day</p>
<a
href="#"
className="inline-block border border-white text-white px-6 py-2 !rounded-button hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Explore
</a>
</div>
</div>
{/* Festive Collection */}
<div className="group relative overflow-hidden rounded-lg shadow-lg h-[500px]">
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20pastel%20pink%20and%20gold%20anarkali%20suit%20with%20intricate%20embroidery%2C%20luxury%20festive%20ethnic%20wear%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20festive%20collection%2C%20detailed%20craftsmanship%20visible&width=500&height=500&seq=3&orientation=portrait"
alt="Festive Collection"
className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
<h3 className="font-serif text-2xl text-white font-bold mb-2">Festive Collection</h3>
<p className="text-white text-sm mb-4">Celebrate special occasions with our festive wear</p>
<a
href="#"
className="inline-block border border-white text-white px-6 py-2 !rounded-button hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Explore
</a>
</div>
</div>
{/* Indo-Western Collection */}
<div className="group relative overflow-hidden rounded-lg shadow-lg h-[500px]">
<img
src="https://readdy.ai/api/search-image?query=Stylish%20Indian%20woman%20wearing%20a%20contemporary%20ivory%20and%20gold%20Indo-western%20outfit%20with%20pants%20and%20long%20jacket%2C%20luxury%20fusion%20ethnic%20wear%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20indo-western%20collection%2C%20detailed%20craftsmanship%20visible&width=500&height=500&seq=4&orientation=portrait"
alt="Indo-Western Collection"
className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
<h3 className="font-serif text-2xl text-white font-bold mb-2">Indo-Western Collection</h3>
<p className="text-white text-sm mb-4">Contemporary fusion of traditional and modern designs</p>
<a
href="#"
className="inline-block border border-white text-white px-6 py-2 !rounded-button hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Explore
</a>
</div>
</div>
</div>
</div>
</section>
{/* New Arrivals */}
<section className="py-16">
<div className="container mx-auto px-4">
<div className="flex justify-between items-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl font-bold">New Arrivals</h2>
<div className="flex space-x-4">
<button
className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeCategory === 'all' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
onClick={() => setActiveCategory('all')}
>
All
</button>
<button
className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeCategory === 'bridal' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
onClick={() => setActiveCategory('bridal')}
>
Bridal
</button>
<button
className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeCategory === 'festive' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
onClick={() => setActiveCategory('festive')}
>
Festive
</button>
<button
className={`px-4 py-2 text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${activeCategory === 'indo-western' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
onClick={() => setActiveCategory('indo-western')}
>
Indo-Western
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
{/* Product Card 1 */}
<div className="group">
<div className="relative overflow-hidden rounded-lg mb-4">
<span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full z-10">Made to Order</span>
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
alt="Blush Pink Embroidered Lehenga"
className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-eye"></i>
</button>
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-heart"></i>
</button>
</div>
</div>
<h3 className="font-serif text-lg font-medium mb-1">Blush Pink Embroidered Lehenga</h3>
<p className="text-[#D4AF37] font-medium mb-2">₹58,000</p>
<button 
  onClick={() => handleAddToCart({
    name: "Blush Pink Embroidered Lehenga",
    price: "₹58,000",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
  })}
  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
  Add to Cart
</button>

{/* Toast Notification */}
{showToast && selectedProduct && (
  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 animate-slide-in-right z-50">
    <div className="flex items-start space-x-4">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm mb-1">{selectedProduct.name}</h4>
        <p className="text-[#D4AF37] text-sm mb-2">{selectedProduct.price}</p>
        <button 
          onClick={() => setShowToast(false)}
          className="text-white bg-[#D4AF37] px-4 py-1 text-sm !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
)}
</div>
{/* Product Card 2 */}
<div className="group">
<div className="relative overflow-hidden rounded-lg mb-4">
<span className="absolute top-4 left-4 bg-[#4CAF50] text-white text-xs px-3 py-1 rounded-full z-10">Ready to Ship</span>
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20ivory%20and%20gold%20anarkali%20suit%20with%20intricate%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=6&orientation=portrait"
alt="Ivory Gold Anarkali Suit"
className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-eye"></i>
</button>
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-heart"></i>
</button>
</div>
</div>
<h3 className="font-serif text-lg font-medium mb-1">Ivory Gold Anarkali Suit</h3>
<p className="text-[#D4AF37] font-medium mb-2">₹42,500</p>
<button 
  onClick={() => handleAddToCart({
    name: "Blush Pink Embroidered Lehenga",
    price: "₹58,000",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
  })}
  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
  Add to Cart
</button>

{/* Toast Notification */}
{showToast && selectedProduct && (
  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 animate-slide-in-right z-50">
    <div className="flex items-start space-x-4">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm mb-1">{selectedProduct.name}</h4>
        <p className="text-[#D4AF37] text-sm mb-2">{selectedProduct.price}</p>
        <button 
          onClick={() => setShowToast(false)}
          className="text-white bg-[#D4AF37] px-4 py-1 text-sm !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
)}
</div>
{/* Product Card 3 */}
<div className="group">
<div className="relative overflow-hidden rounded-lg mb-4">
<span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full z-10">Made to Order</span>
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20deep%20maroon%20saree%20with%20gold%20border%20and%20intricate%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=7&orientation=portrait"
alt="Maroon Embroidered Saree"
className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-eye"></i>
</button>
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-heart"></i>
</button>
</div>
</div>
<h3 className="font-serif text-lg font-medium mb-1">Maroon Embroidered Saree</h3>
<p className="text-[#D4AF37] font-medium mb-2">₹36,000</p>
<button 
  onClick={() => handleAddToCart({
    name: "Blush Pink Embroidered Lehenga",
    price: "₹58,000",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
  })}
  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
  Add to Cart
</button>

{/* Toast Notification */}
{showToast && selectedProduct && (
  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 animate-slide-in-right z-50">
    <div className="flex items-start space-x-4">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm mb-1">{selectedProduct.name}</h4>
        <p className="text-[#D4AF37] text-sm mb-2">{selectedProduct.price}</p>
        <button 
          onClick={() => setShowToast(false)}
          className="text-white bg-[#D4AF37] px-4 py-1 text-sm !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
)}
</div>
{/* Product Card 4 */}
<div className="group">
<div className="relative overflow-hidden rounded-lg mb-4">
<span className="absolute top-4 left-4 bg-[#4CAF50] text-white text-xs px-3 py-1 rounded-full z-10">Ready to Ship</span>
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20pastel%20blue%20indo-western%20outfit%20with%20pants%20and%20long%20jacket%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=8&orientation=portrait"
alt="Pastel Blue Indo-Western Set"
className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-eye"></i>
</button>
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-heart"></i>
</button>
</div>
</div>
<h3 className="font-serif text-lg font-medium mb-1">Pastel Blue Indo-Western Set</h3>
<p className="text-[#D4AF37] font-medium mb-2">₹48,500</p>
<button 
  onClick={() => handleAddToCart({
    name: "Blush Pink Embroidered Lehenga",
    price: "₹58,000",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
  })}
  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
  Add to Cart
</button>

{/* Toast Notification */}
{showToast && selectedProduct && (
  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 animate-slide-in-right z-50">
    <div className="flex items-start space-x-4">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm mb-1">{selectedProduct.name}</h4>
        <p className="text-[#D4AF37] text-sm mb-2">{selectedProduct.price}</p>
        <button 
          onClick={() => setShowToast(false)}
          className="text-white bg-[#D4AF37] px-4 py-1 text-sm !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
)}
</div>
{/* Product Card 5 */}
<div className="group">
<div className="relative overflow-hidden rounded-lg mb-4">
<span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full z-10">Made to Order</span>
<img
src="https://static.readdy.ai/image/3f18ecdef7336876f3811b4515b1447b/57ba2092400d3f8aa2878fb0a35bafaf.png"
alt="Floral Embroidered Midi Dress"
className="w-full h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-eye"></i>
</button>
<button className="bg-white text-gray-800 p-3 rounded-full mx-2 hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fas fa-heart"></i>
</button>
</div>
</div>
<h3 className="font-serif text-lg font-medium mb-1">Floral Embroidered Midi Dress</h3>
<p className="text-[#D4AF37] font-medium mb-2">₹45,000</p>
<button 
  onClick={() => handleAddToCart({
    name: "Blush Pink Embroidered Lehenga",
    price: "₹58,000",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20blush%20pink%20lehenga%20with%20gold%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20high-end%20ethnic%20wear%2C%20detailed%20craftsmanship%20visible%2C%20front%20view%20of%20the%20outfit&width=400&height=500&seq=5&orientation=portrait"
  })}
  className="w-full bg-gray-100 text-gray-800 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
  Add to Cart
</button>

{/* Toast Notification */}
{showToast && selectedProduct && (
  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 animate-slide-in-right z-50">
    <div className="flex items-start space-x-4">
      <img 
        src={selectedProduct.image} 
        alt={selectedProduct.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm mb-1">{selectedProduct.name}</h4>
        <p className="text-[#D4AF37] text-sm mb-2">{selectedProduct.price}</p>
        <button 
          onClick={() => setShowToast(false)}
          className="text-white bg-[#D4AF37] px-4 py-1 text-sm !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
        >
          View Cart
        </button>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="text-gray-400 hover:text-gray-600"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
)}
</div>
</div>
<div className="text-center mt-12">
<a
href="#"
className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-3 font-medium !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
View All Products
</a>
</div>
</div>
</section>
{/* Custom Orders */}
<section className="py-16 bg-[#F8F4E9]">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
<h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Custom Designs Just For You</h2>
<p className="text-gray-700 mb-6">
Can't find exactly what you're looking for? Our team of expert designers can create a bespoke piece tailored to your preferences and measurements.
</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
<span>Personalized consultation with our designers</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
<span>Custom color options and fabric selections</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
<span>Perfect fit with tailored measurements</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i>
<span>Unique designs that reflect your personal style</span>
</li>
</ul>
<a
href="#"
className="inline-block bg-[#D4AF37] text-white px-8 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Request Custom Order
</a>
</div>
<div className="md:w-1/2">
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20fashion%20designer%20working%20with%20a%20client%20on%20a%20custom%20bridal%20lehenga%2C%20showing%20fabric%20swatches%20and%20design%20sketches%2C%20in%20a%20luxurious%20studio%20setting%20with%20soft%20lighting%2C%20professional%20photography%2C%20high-end%20ethnic%20wear%20design%20process%2C%20detailed%20craftsmanship%20visible&width=600&height=500&seq=9&orientation=landscape"
alt="Custom Design Process"
className="w-full h-auto rounded-lg shadow-lg"
/>
</div>
</div>
</div>
</section>
{/* Instagram Feed */}
<section className="py-16">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Join our community and stay updated with our latest designs, behind-the-scenes moments, and style inspiration.
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
{/* Instagram Post 1 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20bride%20wearing%20a%20luxurious%20bridal%20lehenga%2C%20close-up%20detail%20shot%20of%20intricate%20embroidery%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20high-end%20ethnic%20wear%2C%20Instagram%20aesthetic&width=300&height=300&seq=10&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>1.2K</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>48</span>
</div>
</div>
</div>
{/* Instagram Post 2 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Behind%20the%20scenes%20of%20Indian%20ethnic%20wear%20fashion%20shoot%2C%20designer%20adjusting%20a%20luxurious%20outfit%20on%20model%2C%20professional%20photography%20with%20soft%20lighting%2C%20high-end%20ethnic%20wear%2C%20Instagram%20aesthetic&width=300&height=300&seq=11&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>987</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>36</span>
</div>
</div>
</div>
{/* Instagram Post 3 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Close-up%20detail%20shot%20of%20gold%20embroidery%20on%20luxury%20Indian%20ethnic%20wear%2C%20intricate%20craftsmanship%2C%20professional%20photography%20with%20soft%20lighting%2C%20high-end%20ethnic%20wear%20details%2C%20Instagram%20aesthetic&width=300&height=300&seq=12&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>1.5K</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>52</span>
</div>
</div>
</div>
{/* Instagram Post 4 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Elegant%20Indian%20woman%20wearing%20a%20luxurious%20pastel%20pink%20saree%20at%20a%20wedding%2C%20candid%20moment%2C%20professional%20photography%20with%20soft%20lighting%2C%20high-end%20ethnic%20wear%2C%20Instagram%20aesthetic&width=300&height=300&seq=13&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>2.1K</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>78</span>
</div>
</div>
</div>
{/* Instagram Post 5 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Fashion%20runway%20show%20of%20luxury%20Indian%20ethnic%20wear%20collection%2C%20model%20walking%20on%20catwalk%2C%20professional%20photography%20with%20dramatic%20lighting%2C%20high-end%20ethnic%20wear%2C%20Instagram%20aesthetic&width=300&height=300&seq=14&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>1.8K</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>63</span>
</div>
</div>
</div>
{/* Instagram Post 6 */}
<div className="group relative overflow-hidden rounded-lg">
<img
src="https://readdy.ai/api/search-image?query=Designer%20Suhani%20Kapoor%20in%20her%20studio%20working%20on%20a%20luxury%20ethnic%20wear%20design%2C%20creative%20process%2C%20professional%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20design%2C%20Instagram%20aesthetic&width=300&height=300&seq=15&orientation=squarish"
alt="Instagram Post"
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
<div className="flex items-center mb-2">
<i className="fas fa-heart mr-2"></i>
<span>1.3K</span>
</div>
<div className="flex items-center">
<i className="fas fa-comment mr-2"></i>
<span>45</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a
href="https://www.instagram.com/suhanikapoordesigns"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center text-[#D4AF37] font-medium hover:underline cursor-pointer"
>
<i className="fab fa-instagram text-xl mr-2"></i>
Follow @suhanikapoordesigns
</a>
</div>
</div>
</section>
{/* Testimonials */}
<section className="py-16 bg-[#F8F4E9]">
<div className="container mx-auto px-4">
<h2 className="font-serif text-3xl md:text-4xl text-center font-bold mb-12">What Our Customers Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Testimonial 1 */}
<div className="bg-white p-8 rounded-lg shadow-md">
<div className="flex items-center mb-4">
<img
src="https://readdy.ai/api/search-image?query=Portrait%20of%20elegant%20young%20Indian%20woman%20with%20natural%20makeup%20and%20traditional%20jewelry%2C%20professional%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20Instagram%20aesthetic%20profile%20picture&width=80&height=80&seq=16&orientation=squarish"
alt="Priya Sharma"
className="w-16 h-16 rounded-full object-cover mr-4"
/>
<div>
<h4 className="font-medium">Priya Sharma</h4>
<div className="flex text-[#D4AF37]">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
</div>
<p className="text-gray-700 italic">
"My wedding lehenga from Suhani Kapoor Designs was beyond my expectations. The craftsmanship and attention to detail were impeccable. I felt like royalty on my special day!"
</p>
</div>
{/* Testimonial 2 */}
<div className="bg-white p-8 rounded-lg shadow-md">
<div className="flex items-center mb-4">
<img
src="https://readdy.ai/api/search-image?query=Portrait%20of%20elegant%20young%20Indian%20woman%20with%20natural%20makeup%20and%20traditional%20jewelry%2C%20professional%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20Instagram%20aesthetic%20profile%20picture%2C%20different%20person&width=80&height=80&seq=17&orientation=squarish"
alt="Anjali Mehta"
className="w-16 h-16 rounded-full object-cover mr-4"
/>
<div>
<h4 className="font-medium">Anjali Mehta</h4>
<div className="flex text-[#D4AF37]">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
</div>
<p className="text-gray-700 italic">
"The custom Indo-Western outfit I ordered fit perfectly and received countless compliments. The team was incredibly helpful throughout the entire process. Highly recommend!"
</p>
</div>
{/* Testimonial 3 */}
<div className="bg-white p-8 rounded-lg shadow-md">
<div className="flex items-center mb-4">
<img
src="https://readdy.ai/api/search-image?query=Portrait%20of%20elegant%20young%20Indian%20woman%20with%20natural%20makeup%20and%20traditional%20jewelry%2C%20professional%20photography%20with%20soft%20lighting%2C%20minimalist%20background%2C%20Instagram%20aesthetic%20profile%20picture%2C%20third%20different%20person&width=80&height=80&seq=18&orientation=squarish"
alt="Meera Patel"
className="w-16 h-16 rounded-full object-cover mr-4"
/>
<div>
<h4 className="font-medium">Meera Patel</h4>
<div className="flex text-[#D4AF37]">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
</div>
</div>
<p className="text-gray-700 italic">
"I've purchased several pieces from Suhani Kapoor Designs and each one is more beautiful than the last. The quality is exceptional and the designs are timeless yet contemporary."
</p>
</div>
</div>
</div>
</section>
{/* Newsletter */}
<section className="py-16">
<div className="container mx-auto px-4">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Mailing List</h2>
<p className="text-gray-600 mb-8">
Subscribe to receive updates on new collections, exclusive offers, and styling tips.
</p>
<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input
type="email"
value={email}
onChange={handleEmailChange}
placeholder="Your email address"
className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
required
/>
<button
type="submit"
className="bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer whitespace-nowrap"
>
Subscribe
</button>
</form>
<p className="text-xs text-gray-500 mt-4">
By subscribing, you agree to our Privacy Policy and consent to receive updates from Suhani Kapoor Designs.
</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-gray-900 text-white pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
{/* Shop */}
<div>
<h3 className="font-serif text-xl font-bold mb-4">Shop</h3>
<ul className="space-y-2">
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Bridal Collection</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Festive Wear</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Indo-Western</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">New Arrivals</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Custom Orders</a></li>
</ul>
</div>
{/* Customer Service */}
<div>
<h3 className="font-serif text-xl font-bold mb-4">Customer Service</h3>
<ul className="space-y-2">
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Contact Us</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Shipping Policy</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Returns & Exchanges</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Size Guide</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">FAQs</a></li>
</ul>
</div>
{/* About */}
<div>
<h3 className="font-serif text-xl font-bold mb-4">About</h3>
<ul className="space-y-2">
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Our Story</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Craftsmanship</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Blog</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Press</a></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Careers</a></li>
</ul>
</div>
{/* Connect */}
<div>
<h3 className="font-serif text-xl font-bold mb-4">Connect With Us</h3>
<p className="text-gray-400 mb-4">
Follow us on social media for the latest updates, styling inspiration, and behind-the-scenes content.
</p>
<div className="flex space-x-4 mb-6">
<a href="https://www.instagram.com/suhanikapoordesigns" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-xl hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
<i className="fab fa-facebook"></i>
</a>
<a href="#" className="text-xl hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
<i className="fab fa-pinterest"></i>
</a>
<a href="#" className="text-xl hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">
<i className="fab fa-whatsapp"></i>
</a>
</div>
<div className="flex space-x-3">
<i className="fab fa-cc-visa text-2xl text-gray-400"></i>
<i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
<i className="fab fa-cc-amex text-2xl text-gray-400"></i>
<i className="fab fa-paypal text-2xl text-gray-400"></i>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0">
&copy; {new Date().getFullYear()} Suhani Kapoor Designs. All rights reserved.
</p>
<div className="flex space-x-4 text-sm text-gray-400">
<a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
<span>|</span>
<a href="#" className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>
</div>
);
};

// Add the animation keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.3s ease-out forwards;
}
`;
document.head.appendChild(style);

export default App