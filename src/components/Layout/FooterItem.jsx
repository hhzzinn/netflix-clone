import { Link } from "react-router-dom";

const FooterItem = ({ name, path }) => {
  return (
    <Link
      to={path}
      style={{
        fontSize: 10,
        textDecoration: "underline",
      }}
    >
      {name}
    </Link>
  );
};

export default FooterItem;
