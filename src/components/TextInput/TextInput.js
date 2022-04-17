import React, {useRef, useState} from 'react';

import styles from "./TextInput.module.css"

export const TextInput = ({id,number,text,onAddItem,onUpdateItem,removeItem}) => {
    const inputRef = useRef(null)
    const [value,setValue] = useState(text)
    const [count,setCount] = useState(1)
    
    const handleChangeInput = e => {
        if (!e.target.value.length){
            removeItem(id)
        }
        if(count === 1) onAddItem('')
        setCount(2)
        setValue(e.target.value)
    }
    
    const handleAddItem = (e) => {
        if (value.length && e.key === 'Enter') {
            onUpdateItem(value,id)
            inputRef.current.blur()
        }
    }
    
    return (
        <div className={styles.TextInputWrapper}>
            <p>{number+1}.</p>
            <input 
                type="text"
                ref={inputRef}
                value={value} 
                className={styles.TextInput} 
                onChange={handleChangeInput} 
                onKeyPress={handleAddItem}
            />
        </div>
    );
};

