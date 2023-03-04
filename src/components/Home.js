import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/org-profile")}>Organization</button>
      <button onClick={() => navigate("/user-profile")}>Person</button>
    </>
  );
}
