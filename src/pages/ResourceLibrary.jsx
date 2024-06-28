import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const resourcesData = [
  {
    id: 1,
    title: 'Introduction to Algebra',
    type: 'article',
    tags: ['math', 'algebra'],
    category: 'Mathematics',
  },
  {
    id: 2,
    title: 'The World of Chemistry',
    type: 'book',
    tags: ['science', 'chemistry'],
    category: 'Science',
  },
  {
    id: 3,
    title: 'Physics for Beginners',
    type: 'multimedia',
    tags: ['science', 'physics'],
    category: 'Science',
  },
  // Add more resources as needed
];

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearchTerm = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => resource.tags.includes(tag));
    return matchesSearchTerm && matchesCategory && matchesTags;
  });

  const uniqueCategories = ['All', ...new Set(resourcesData.map((resource) => resource.category))];
  const uniqueTags = [...new Set(resourcesData.flatMap((resource) => resource.tags))];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-6">
        <h1 className="text-4xl font-bold text-center">Resource Library</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-6">
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="w-full max-w-2xl mb-6">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full bg-white shadow-md rounded-lg p-4"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-2xl mb-6">
          <div className="flex flex-wrap">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`m-2 px-4 py-2 rounded-full ${
                  selectedTags.includes(tag) ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                } shadow-md`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full max-w-2xl">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold mb-2">{resource.title}</h2>
              <p className="text-gray-700 mb-2">Type: {resource.type}</p>
              <p className="text-gray-700 mb-2">Category: {resource.category}</p>
              <p className="text-gray-700">Tags: {resource.tags.join(', ')}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ResourceLibrary;