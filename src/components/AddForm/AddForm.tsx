import React, {ChangeEvent, useState} from "react";
import Input from "@mui/material/Input";
import './AddForm.scss'
import AddIcon from '@mui/icons-material/Add';

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
    <div className='tl-containerForm'>
      <div className='tl-containerForm__input'>
        <Input
          placeholder={'Enter title for Todolist'}
          value={title}
          onChange={onChangeNewTitle}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className='tl-containerForm__button'>
        <AddIcon onClick={addTitle}/>
      </div>
    </div>
  );
}
