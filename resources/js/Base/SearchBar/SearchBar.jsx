import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const SearchBar = ({ className }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            router.get('/daftar-kost', { search: query }, {
                preserveState: true,
                preserveScroll: true
            });
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            setSuggestions([
                'Kos Putra',
                'Kos Putri',
                'Kos Campur'
            ].filter(item => item.toLowerCase().includes(value.toLowerCase())));
        } else {
            setSuggestions([]);
        }
    };

    const clearInput = () => {
        setQuery('');
        setSuggestions([]);
    };

    return (
        <div className={`relative ${className} search-bar-container`}>
            <div className={`flex items-center py-1 bg-white rounded-md border shadow-sm lgCustom:px-3 ${query ? 'border-primary' : 'border-gray-300'}`}>
                <i className="mr-2 text-gray-500 ri-search-line"></i>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                    placeholder="Ayo Cari Kosmu!"
                    className="flex-grow border-none focus:outline-none focus:ring-0"
                    style={{ width: '100%' }}
                />
                {query && (
                    <button onClick={clearInput} className="ml-2 text-gray-500 hover:text-primary">
                        <i className="ri-close-line"></i>
                    </button>
                )}
            </div>
            {suggestions.length > 0 && (
                <ul className="absolute right-0 left-0 z-10 mt-1 bg-white rounded-md border shadow-lg">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                                setQuery(suggestion);
                                setSuggestions([]);
                                router.get('/daftar-kost', { search: suggestion }, {
                                    preserveState: true,
                                    preserveScroll: true
                                });
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
