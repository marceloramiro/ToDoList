import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoType = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

interface TodoContextProps {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  removeCompletedTodos: () => void;
  setTodoIsCompleted: (id: string, isCompleted: boolean) => void;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

const TodoContext = createContext<TodoContextProps | null>(null);

const TodoProvider = ({children}: TodoProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const setTodoIsCompleted = (id: string, isCompleted: boolean) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo =>
        todo.id === id ? {...todo, isCompleted} : todo,
      );
    });
  };

  const removeCompletedTodos = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isCompleted));
  };

  const addTodoToStorage = useCallback(async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error(error);
    }
  }, [todos]);

  const getTodosFromStorage = async () => {
    try {
      const storedTodo = await AsyncStorage.getItem('todos');
      if (storedTodo) {
        setTodos(JSON.parse(storedTodo));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodosFromStorage();
  }, []);

  useEffect(() => {
    addTodoToStorage();
  }, [todos, addTodoToStorage]);

  return (
    <TodoContext.Provider
      value={{todos, addTodo, removeCompletedTodos, setTodoIsCompleted}}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within TodoProvider');
  }
  return context;
};

export {TodoProvider, useTodoContext};
