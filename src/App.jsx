import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setpassword] = useState('')
  const [numbers, setnumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [uppertext, setuppertext] = useState(false)
  const [lengthpass, setlengthpass] = useState(12)

  const lchange=(e)=>{
    console.log(e.target.value)
    setlengthpass(e.target.value)

  }
  const passgen=(e)=>{
    let s='abcdefghijklmnopqrstuvwxyz'
    let str=''
    if(numbers){
        s=s+'1234567890'
        
      }
      if(uppertext){
        s=s+'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        
      }
    if(symbols){
        s=s+'!@#$%^&*()'
        //setsymbols(str)
    }
    for(let i=0;i<lengthpass;i++){
      let index=Math.floor((Math.random())*s.length)
      str=str+s[index];
    }
    console.log(str);
    
    setpassword(str)
  }


  useEffect(() => {
    passgen()
  }, [numbers,symbols,uppertext,lengthpass])
  const copiedpass=(e)=>{
    navigator.clipboard.writeText(password)
    e.preventDefault()
    alert(`Password copied to clipboard!`)
  }
  return (
    <div className='h-screen max-w-full bg-gray-600'>
      <div>
        <h1 className='text-4xl w-screen text-center font-serif'>Pasword Generator</h1>
      
      <form className='px-15 gap-10 mt-10' >
        <input type="text" className='w-180 h-20 rounded-3xl bg-white px-6' placeholder='password' value={password} />
        <button onClick={copiedpass} className='h-20 w-50 bg-red-600 rounded-4xl ml-10 cursor-pointer hover:font-bold transition-all hover:scale-110 '>
          Copy password
        </button> 
      </form>

      <input type="range" className=' transform scale-150 w-80  ml-35 mt-20' onChange={lchange} name="" id="" defaultValue={12}  />
      <span className='ml-23 text-2xl'> value:{lengthpass}</span>    
      </div>
      <div className='w-1/2 flex justify-between px-20 mt-20'>
        <input onChange={(e)=>{
          setuppertext(e.target.checked)
          
        }} type="checkbox"  /> <span className='w-1/4'>UpperText</span>
        <input onChange={(e)=>{
          setnumbers(e.target.checked)

          
        }} type="checkbox" /><span className='w-1/4'>Numbers</span>
        <input onChange={(e)=>{
          setsymbols(e.target.checked)
            
        }} type="checkbox" /> <span className='w-1/4'>Symbols</span>   
      </div>

    </div>
    
  )
}

export default App
