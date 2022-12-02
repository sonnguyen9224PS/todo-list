import { Typography, Divider } from "antd";
import TodoList from "../../components/Todolist";
const Title = Typography;

function Homepage() {
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
      <Title style={{ textAlign: "center", color: "#333", fontWeight: "bold" }}>
        TodoList
      </Title>
      <Divider />
      <TodoList />
    </div>
  );
}

export default Homepage;
