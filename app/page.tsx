import TodoForm from "./__components/todo/TodoForm";
import TodoList from "./__components/todo/TodoList";
import DarkModeToggle from "./__components/todo/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-lg rounded-2xl p-8 shadow-xl
        bg-[var(--card)] ring-1 ring-green-500/30 transition"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <span
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500
            px-6 py-2 text-xl font-bold text-white shadow-md"
          >
            My Todo App
          </span>

          <DarkModeToggle />
        </div>

        {/* Todo form */}
        <TodoForm />

        {/* Divider */}
        <div className="my-6 h-px w-full bg-green-500/30"></div>

        {/* Todo list */}
        <TodoList />
      </div>
    </main>
  );
}
