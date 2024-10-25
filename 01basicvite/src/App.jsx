import Youtube from './youtube'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // we can't directly  return tow elements at a time in jsx. so for handeling this error we wrap this inside a <div> and this will end the error but this is not a good practic so we update it from <div> element to empty <> </>  tag.
    <>
      <h1>Vite React App</h1>
      <p>this is vite app</p>

      <Youtube />
    </>
    
  )
}

export default App
