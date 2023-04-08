import { Button } from 'flowbite-react';
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
    <div className="flex flex-col gap-2 w-[100%] px-[30px]">
      
      <div className='flex flex-row gap-x-[10px] items-center py-[10px]'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder='Enter the input tag'
          className="block rounded-md text-gray-900 border-[1px] border-[#DCE3EE] dark:border-[#232830] flex-grow"
        />
        <Button className='ml-auto'>Share</Button>
      </div>

      <div className='w-full h-auto flex flex-col flex-grow gap-y-[10px] pb-[20px]'>
        {tags.map((tag, index) => {
          return (
            <div className='flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>{tag}</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )})}
      </div>
    </div>
)}

export default TagList;
