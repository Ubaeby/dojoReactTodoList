const TodoResults = props => {
    const { todoList, setTodoList } = props;
    const newList = [...todoList];
    const deleteFilter = (arr) => {
        setTodoList(
            newList.filter( (list, index) => {
                return list.id !== arr;
            })
        )
    }

    const lineStyle = (complete)  => {
        if (complete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    }

    const toggleComplete = (index) => {
        const updateTodos = newList.map((list, i) => {
            if (index === i) {
                list.complete = !list.complete;
            }
            return list;
        });
        setTodoList(updateTodos);
    }

    return (
        <div>
            {newList.map((list, i) => (
                <div className ={ lineStyle(list.complete) } key={list.id}>
                    {list.text}
                    <input type="checkbox" onChange={(index) => {
                        toggleComplete(i);
                    }} checked={list.complete}  />
                    <button onClick={() => deleteFilter(list.id)}> Delete </button>
                </div>
            ))}
        </div>
    )
};

export default TodoResults;