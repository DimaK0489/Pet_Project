import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

interface Props {
  title: string
  onChangeItem: (newTitle: string) => void
}

export const EditField = ({title, onChangeItem}: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(title);

  const onEditMode = () => {
    setEditMode(true)
  }
  const offEditMode = () => {
    setEditMode(false)
    onChangeItem(newTitle)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      offEditMode()
    }
  }

  return (
    editMode
      ? <TextField variant={"standard"}
                   color={'success'}
                   value={newTitle}
                   autoFocus
                   onKeyPress={handleKeyPress}
                   onBlur={offEditMode}
                   onChange={onChangeHandler}/>
      : <span onDoubleClick={onEditMode}>{title}</span>
  );
}
