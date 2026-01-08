

"use client"
import { API_URL } from '@/lib/config';
import { useRouter } from 'next/navigation';
import React from 'react'

const DoneTodo = ({ todoId, isDone }: { todoId: string; isDone: boolean }) => {
  const router = useRouter();

  const handleOne = async () => {
    try {
      const newStatus = !isDone;

      const res = await fetch(`${API_URL}/api/todo/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: newStatus,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const result = await res.json();
      router.refresh();
      console.log("Todo updated:", result);

    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  return (
   <div className="flex items-center gap-2">
    <button
      onClick={handleOne}
      className="rounded-lg border border-green-300 px-3 py-1.5
      text-sm font-medium text-green-600
      hover:bg-green-50 transition
      dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/30"
    >
        {isDone ? "Undo" : "Done"}
    </button>

    </div>
  )
}

export default DoneTodo
