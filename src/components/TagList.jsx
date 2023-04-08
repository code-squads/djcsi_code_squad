import { useState } from 'react';

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      setTags([...tags, inputValue]);
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '') {
      setTags(tags.slice(0, -1));
    }
  };

  const handleRemoveTag = (tagIndex) => {
    setTags(tags.filter((_, index) => index !== tagIndex));
  };

  return (
    <div className="flex flex-wrap gap-2 w-1/4">
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder='Enter the input tag'
        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300"
      />
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center px-3 py-1 bg-slate-500 text-white rounded-md cursor-pointer"
        >
          <span className="mr-2">{tag}</span>
          <button
            className="text-sm font-bold text-white rounded-full "
            onClick={() => handleRemoveTag(index)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default TagList;
