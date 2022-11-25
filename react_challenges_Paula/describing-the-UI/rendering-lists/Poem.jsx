const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

//////// challenge 4 /////////

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          <p key={index}> {line}</p>
          {index !== 2 ? <hr /> : undefined
          }
        
        </>
      ))}
    </article>
  );
}
//// not getting the key idea 