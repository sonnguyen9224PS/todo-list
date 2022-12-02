import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Detailpage() {
  const { todoList } = useSelector((state) => state.todo);
  console.log("detail", todoList);

  const { id } = useParams();
  console.log("id", id);

  const TodoDetail = todoList.filter((todo) => todo.id === id);
  //   console.log("exact", TodoDetail);

  function renderDetail() {
    return TodoDetail.map((todo) => {
      return (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </div>
      );
    });
  }

  return (
    <div
      style={{
        width: 800,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "100%",
      }}
    >
      {renderDetail()}
      <Link to="/">back todolist</Link>
    </div>
  );
}

export default Detailpage;
