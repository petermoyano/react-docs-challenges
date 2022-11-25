import { getImageUrl } from "../rendering-lists/utils";

function Header({ name }) {
  return <h2 className="header">{name}</h2>;
}

function Avatar({ image }) {

  return (
    <img className="avatar" src={getImageUrl(image)}  />
  );
}

export { Avatar, Header };
