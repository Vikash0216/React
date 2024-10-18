import { useState ,useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [showfinshed, setshowFinshed] = useState(false)


useEffect(() => {
  let taskString = localStorage.getItem("tasks")
  if (taskString){
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    setTasks(tasks)
  }
}, [])

  const savetoLS = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }])
    setTask("")
    console.log(tasks);
    savetoLS()
  }
  const handleEdit =  (e, id) => {
    let edit= tasks.filter(item=> item.id === id)
    setTask(edit[0].task)

    let newTasks = tasks.filter(item => {
      return item.id !== id
    });
    setTasks(newTasks)
    savetoLS()
  }


  const handleDelete = (e, id) => {
    let newTasks = tasks.filter(item => {
      return item.id !== id
    });
    setTasks(newTasks)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
    savetoLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex(item => {
      return item.id === id;
    })
    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks)
    savetoLS()

  }
  const toggleFinshed = (e) => {
    setshowFinshed(!showfinshed)
  }
  

  return (
    <>
      <Navbar />
      <div className='mainbox '>
        <div className="card bg-purple-400 min-h-[75vh] max-h-[80vh] overflow-auto max-w-[80vw] rounded-2xl mx-auto">
          <div className="cardTop flex justify-center flex-col align-middle ">
            <div className="heading text-center py-5 text-amber-50 text-4xl bg-purple-300 rounded-md">
              mY Task's
            </div>
            <div className="addtask mt-4 ml-4 mr-4 max-w-[80%] flex justify-between">
              <input onChange={handleChange} value={task} type="text" className='w-[53rem] rounded-lg min-h-8 px-2' />
              <button onClick={handleAdd} disabled={task.length<=3} className='addButton bg-purple-800 hover:bg-purple-950 disabled:bg-purple-600 text-white px-8 py-2 rounded-lg'>Save</button>
            </div>
          </div>
          <div className="show flex gap-8 items-center mb-8">
          <input onChange={toggleFinshed} className='ml-8 mt-8 form-checkbox h-6 w-6 text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50' type="checkbox" checked={showfinshed}/> <div className='ml-8 mt-8 font-extrabold text-green-800'>Show Finished</div>
          </div>
          <div className="tasks">
            {tasks.length === 0 && <div className='mt-4 ml-6 mr-4 px-2'> No ToDo's to display</div>}
            {tasks.map(item => {
              return(showfinshed || !item.isCompleted) && <div key={item.id} className="task flex justify-between max-w-[80%] mt-4 ml-6 mr-4 px-2">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className='form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50' id='' />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.task}
                </div>
                <div className="buttons flex gap-8">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='editButton bg-purple-800 hover:bg-purple-950 text-white px-6 py-2 rounded-lg'><FaEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='deleteButton bg-purple-800 hover:bg-purple-950 text-white px-8 py-2 rounded-lg'><MdDeleteForever /></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
