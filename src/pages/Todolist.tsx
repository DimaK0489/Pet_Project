import React from "react";

interface Props {
  todolist: any
  id: string
  tasks: any
}

export const Todolist: React.FC<Props> = ({todolist, id, tasks}: Props) => {

  return (
    <div>
      <h4>{todolist.title}</h4>
    </div>
  );
}
