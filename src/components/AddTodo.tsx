import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};
