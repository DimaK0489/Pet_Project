import React, {ChangeEvent, useState} from "react";
import Input from "@mui/material/Input";
import './AddForm.scss'

interface Props {
  addItem: (title: string) => void;
}

export const AddForm: React.FC<Props> = ({addItem}: Props) => {
  const [title, setTitle] = useState('');

  const onChangeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const addTitle = () => {
    if (title.trim() !== '') {
      addItem(title)
      setTitle('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addTitle()
    }
  }

  return (
    <div className='tl-form'>
      <Input
        placeholder={'Enter title for Todolist'}
        value={title}
        onChange={onChangeNewTitle}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
