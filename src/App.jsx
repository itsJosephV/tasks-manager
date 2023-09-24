import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import NoTodos from "./components/NoTodos";
import { InfoIcon } from "./icons";
import { useTodosLS } from "../hooks/useTodosLS";
import { useUserLS } from "../hooks/useUsernameLS";
import { useTodosLeft } from "../hooks/useTodosLeft";

function App() {
  const [todos, setTodos] = useTodosLS("todos", []);
  const [username, setUsername, key] = useUserLS("username", "");
  const remainingTodos = useTodosLeft(todos);

  const handleOnBlurSubmit = () => {
    localStorage.setItem(key, JSON.stringify(username));
  };

  const handleKeySubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(username));
    document.activeElement.blur();
  };

  const sortedTodos = [...todos].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="border border-zinc-800 max-w-[620px] h-[700px] bg-zinc-900 w-full rounded-lg flex flex-col p-[18px] pb-0">
      <div className="mb-4 flex flex-row justify-between">
        <h1 className="text-3xl font-semibold flex flex-row items-center gap-2">
          Hello
          <span>
            <form onSubmit={handleKeySubmit}>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                placeholder="You"
                className="input input-ghost w-auto max-w-xs text-3xl pl-0"
                onBlur={handleOnBlurSubmit}
              />
            </form>
          </span>
        </h1>
        <div className="flex flex-col">
          <a
            href="https://github.com/itsJosephV"
            target="_blank"
            className="text-[14px] text-end font-mono text-zinc-300 underline underline-offset-2 decoration-zinc-500 hover:decoration-zinc-200 cursor-pointer"
          >
            Source
          </a>
          <a
            href="https://github.com/itsJosephV"
            target="_blank"
            className="text-[14px] text-end font-mono text-zinc-300 underline underline-offset-2 decoration-zinc-500 hover:decoration-zinc-200 cursor-pointer"
          >
            Portfolio
          </a>
        </div>
      </div>
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
    </div>
  );
}

export default App;
