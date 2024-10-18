import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState()
  const [withChar, setWithChar] = useState(false)
  const [withnumber, setWithnumber] = useState(false)
  const [password, setPassword] = useState("")
  // useRefhook
  const passwordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (withChar) str += `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`
    if (withnumber) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let chars = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(chars)
    }

    setPassword(pass)
  }, [length, withChar, withnumber, setPassword])


  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);    
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, withChar, withnumber, generatePassword])


  return (
    <>
      <div className="mainContainer bg-purple-300 min-h-[35vh] max-w-[80vw] mx-auto mt-16 rounded-lg ">
        <div className="heading text-4xl text-center py-6">
          <h2>Password Generator</h2>
        </div>
        <div className="inputbox flex justify-center items-center ">
          <input className='w-[80%] h-[5vh] rounded-lg px-2'
            type="text"
            value={password}
            placeholder='password'
            readOnly
          ref={passwordRef} />
          <button
            onClick={copyToClipBoard}
            className='bg-purple-950 text-2xl px-6 py-1 rounded-xl text-white'>Copy</button>
        </div>
        <div className="inputboxes flex gap-12 w-[100%] justify-evenly my-6 ml-6 mr-6">
          <div className='flex items-center gap-4'>
            <input
              onChange={(e) => {
                setLength(e.target.value)
              }}
              type="range"
              min="6"
              max="100"
              value={length}
              id='passwordRange'
              className="bg-gray-100 rounded-lg appearance-none cursor-pointer range-slider-thumb" />
            <label htmlFor="passwordRange">Length: {length}</label>
          </div>
          <div>
            <input
              onChange={() => {
                setWithChar((prev) => !prev);
              }}
              type="checkbox"
              defaultChecked={withChar}
              className=''
              id='charCheckbox' />
            <label htmlFor="charCheckbox">Insert Special Charaters</label>
          </div>
          <div>
            <input
              onChange={() => {
                setWithnumber((prev) => !prev);
              }}
              type="checkbox"
              className=''
              id='numCheckbox' />
            <label htmlFor="numCheckbox">Insert Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
