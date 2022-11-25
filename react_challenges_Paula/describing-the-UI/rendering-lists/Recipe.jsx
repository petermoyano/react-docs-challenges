export default function Recipe({ name, id, ingredients }) {
  return (
    <div className="recipe">
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ing) => (
          <li id={id} key={ing}>
            {ing}
          </li>
        ))}
      </ul>
    </div>
  );
}
