"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/config";
const TodoForm = () => {


  const router=useRouter();

  // Handle form submission
  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submit behavior

    const form = event.target as HTMLFormElement; // Make sure to cast the target as HTMLFormElement
    const formData = new FormData(form);

    const data = {
      title: formData.get("title"),
    };

    try {
      const res = await fetch(`${API_URL}/api/todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const result = await res.json();

      router.refresh(); // Refresh the page to show the new todo
      console.log("Todo saved:", result);
      

      form.reset(); // Reset the form after saving
      



    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="w-full" onSubmit={HandleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Todo</Label>
          <Input
            id="title"
            name="title"
            placeholder="title of your todo"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
