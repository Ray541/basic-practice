import React from 'react'

interface ButtonProps {
    onButtonClick: (value: string) => void;
}

const buttonValues = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+",];

const Button: React.FC<ButtonProps> = ({ onButtonClick }) => {
    return (
        <>
            <div className="button-holder">
                {buttonValues.map((eachvalue) => (
                    <button
                        key={eachvalue}
                        value={eachvalue}
                        className={
                            eachvalue === "="
                                ? "button-design delete-btn"
                                : ["/", "*", "-", "+"].includes(eachvalue)
                                    ? "button-design operation-btn"
                                    : "button-design number-btn"
                        }
                        onClick={() => onButtonClick(eachvalue)}
                    >
                        {eachvalue}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Button