import { Link } from "react-router-dom";

export const Button = ({ text, style, url }) => {
  return (
    <Link className={`${style}`} to={url}>
      {text}
    </Link>
  );
};
