import React, { useRef, useEffect } from 'react';

const EditableText = ({text, isEditing, valueChanger, editingModeChanger}) => {

  const inputRef = useRef(null);

  const handleKeyPress = ({key}) => {
    if(key === 'Enter'){
      valueChanger(inputRef.current.value);
      editingModeChanger(false);
    }
  }

  useEffect(() => inputRef.current.focus()) 

  return(
    <>
      {
        isEditing ?
        (
          <input value={text} ref={inputRef} onKeyPress={handleKeyPress} />

        ) :
        this.props.children
      }
    </>
  )
}

export default EditableText;