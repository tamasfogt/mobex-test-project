import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import TodoContainer from "../components/todo/TodoContainer";

export default function Home() {
  return (
    <DefaultLayout>
      <TodoContainer title="Todo list" />
    </DefaultLayout>
  );
}
