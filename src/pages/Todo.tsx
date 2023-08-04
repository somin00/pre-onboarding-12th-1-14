import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pathsObj } from "../router/router";

export const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) navigate(pathsObj.signin);
  }, []);

  return (
    <section>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 2</span>
          </label>
        </li>
      </ul>
    </section>
  );
};
