import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPage() {
  const { todoList } = useSelector((state) => state.todo);
  const { id } = useParams();
  const dataDetail = todoList.find((item) => item.id === id);
  function renderDetail() {
    return (
      <div key={dataDetail.id}>
        <p>{dataDetail.title}</p>
        <p>{dataDetail.description}</p>
      </div>
    );
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

export default DetailPage;
