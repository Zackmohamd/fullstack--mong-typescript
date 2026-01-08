"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteTodo = ({ todoId }: { todoId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `/api/todo/${todoId}`,
        {
          method: "DELETE", // ⚠️ MUHIIM
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const result = await res.json();
      router.refresh();
      console.log("Todo deleted:", result);

    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
  <div className="flex items-center gap-2">
  <button
      onClick={handleDelete}
      className="rounded-lg border border-red-300 px-3 py-1.5
      text-sm font-medium text-red-600
      hover:bg-red-50 transition
      dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30"
    >
      Delete
    </button>
    </div>
  );
};

export default DeleteTodo;
