import { ChangeEvent, useState } from 'react'
import ButtonHolder from './assets/Components/ButtonHolder';
import "../src/App.css"

const App = () => {
  const [result, setResult] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  }

  const deleteOne = () => {
    setResult(result.slice(0, -1));
  }

  const allClear = () => {
    setResult("");
  }

  return (
    <>
      <input type="text" value={result} onChange={handleChange} className='display' /><br />
      <button className="button-design delete-btn" onClick={deleteOne}>
        Del
      </button>
      <button className="button-design delete-btn" onClick={allClear}>
        Ac
      </button>
      <ButtonHolder />
    </>
  )
}

export default App