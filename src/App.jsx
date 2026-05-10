import './index.css'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [task , setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask);
    
    setTitle('');
    setDetails('');
  }

  const deleteNote =(idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx ,1)
    setTask(copyTask)
    
  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex gap-4 flex-col lg:w-[40%] items-start p-10'>

        <h1 className='font-bold text-3xl'>Add Notes</h1>

        {/* PHELA VALA INPUT */}
        <input type="text"
          value = {title}
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full border-2 font-medium outline-none rounded'
          onChange={(e)=>{
            setTitle(e.target.value)
          }}/>

        {/* DUSRA WALA INPUT */}
        <textarea type="text" 
          value ={details}
          placeholder='Enter Notes Details'
          className='px-5  h-32 py-2 flex items-start flex-row w-full border-2 font-medium outline-none rounded' 
          onChange={(e)=>{
            setDetails(e.target.value);
          }}/>

        <button className='bg-white active:scale-95 font-medium w-full text-black outline-none px-5 py2 rounded'>Add Note</button>
      </form>

      <div className='lg:w-[60%] lg:border-l-2 h-screen p-10 overflow-hidden'>
        <h1 className='font-bold text-3xl'>Your Notes</h1>
        <div className='flex flex-wrap justify-start items-start gap-5 h-[85%] overflow-y-auto scrollbar-hide mt-5'>
          {task.map((e,idx)=>{

            return   <div key={idx} className=' flex justify-between flex-col items-start relative h-52 bg-cover w-36 py-4 px-6 rounded-2xl overflow-hidden text-black bg-[url(https://i.pinimg.com/736x/25/07/76/250776f63823eaca9ced64fdeeee8c73.jpg)]'>

              <div className='overflow-y-auto scrollbar-hide flex-1 w-full'>

                <h3 className='leading-tight text-xl font-bold text-black wrap-break-words'>{e.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-500 wrap-break-words'>{e.details}</p>

              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 test-xs rounded font-bold text-white'>Delete</button>
            </div>
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App
