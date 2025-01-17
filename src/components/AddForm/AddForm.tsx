import React, {ChangeEvent, useState} from "react";
import Input from "@mui/material/Input";
import './AddForm.scss'
import AddIcon from '@mui/icons-material/Add';

interface Props {
  titleForComponent: string;
  addItem: (title: string) => void;
}

export const AddForm: React.FC<Props> = ({addItem, titleForComponent}: Props) => {
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
          placeholder={titleForComponent}
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
