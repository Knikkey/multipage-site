import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, amet?
      </p>
    </div>
  );
}
