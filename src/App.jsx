import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import NoTodos from "./components/NoTodos";
import { InfoIcon } from "./icons";
import { useTodosLS } from "../hooks/useTodosLS";
import { useUserLS } from "../hooks/useUsernameLS";
import { useTodosLeft } from "../hooks/useTodosLeft";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useTodosLS("todos", []);
  const [username, setUsername, key] = useUserLS("username", "");
  const remainingTodos = useTodosLeft(todos);

  const sortedTodos = [...todos].sort((a, b) => b.createdAt - a.createdAt);

  const handleOnBlurSubmit = () => {
    localStorage.setItem(key, JSON.stringify(username));
  };

  const handleKeySubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(username));
    document.activeElement.blur();
  };

  return (
    <div className="border border-zinc-800 max-w-[620px] min-h-[700px] bg-zinc-900 w-full rounded-lg flex flex-col p-[18px] pb-5 relative">
      <Header
        handleOnBlurSubmit={handleOnBlurSubmit}
        handleKeySubmit={handleKeySubmit}
        setUsername={setUsername}
        username={username}
      />
      <section className="mb-7">
        <TodoForm setTodos={setTodos} />
      </section>
      <section>
        <div className="flex flex-row justify-between items-center">
          <div className="mb-2 flex flex-row items-center gap-2">
            <h3 className="text-[20px] font-semibold">Your list</h3>
            <div
              data-tip="Save the changes by clicking outside"
              className="flex items-center justify-center tooltip tooltip-right h-[20px] w-[20px] bg-zinc-700 rounded-2xl"
            >
              <InfoIcon width={"1.5em"} height={"1.5em"} fill={"#a1a1aa"} />
            </div>
          </div>
          <small className="text-zinc-500">
            To be completed: {remainingTodos}
          </small>
        </div>
        <div className="border border-zinc-700 p-3 pb-0 rounded-lg h-[330px] overflow-y-auto">
          {sortedTodos.length > 0 ? (
            sortedTodos.map((item) => (
              <TodoCard
                key={item.id}
                id={item.id}
                todo={item.todo}
                category={item.category}
                done={item.done}
                createdAt={item.createdAt}
                todos={todos}
                setTodos={setTodos}
              />
            ))
          ) : (
            <NoTodos />
          )}
        </div>
      </section>
      <Footer />
      
    </div>
  );
}

export default App;
