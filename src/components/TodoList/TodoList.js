import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <>
      {todos.length === 0 && <Text>There is no todos...</Text>}
      <Grid>
        {todos?.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.query} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
