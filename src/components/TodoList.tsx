import { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/UseTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {

    const {error, loading, todos} = useTypedSelector(state => state.todos)

    const {fetchTodos} = useActions()

    useEffect(() => {
        fetchTodos()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {todos.map(todo => 
                    <h2>{todo.title}</h2>
                )}
        </div>
    );
};

export default TodoList;