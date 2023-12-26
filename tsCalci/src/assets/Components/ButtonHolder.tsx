import { useState } from 'react';
import Button from './Button'


const ButtonHolder = () => {
    const [result, setResult] = useState<string>("");
    const handleButtonClick = (value: string) => {
        setResult(result + value);
        console.log("first");
    }


    return (
        <Button onButtonClick={handleButtonClick} />
    )
}

export default ButtonHolder