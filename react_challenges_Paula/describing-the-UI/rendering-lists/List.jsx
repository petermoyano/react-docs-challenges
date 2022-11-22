import { checkIsManualRevalidate } from "next/dist/server/api-utils/index.js";
import { people } from "./peopleData.js";
import { getImageUrl } from "./utils.js";

function List() {
    //////
    const chemists = people.filter(person => person.profession ==="chemist")
    const rest = people.filter(person => person.profession !=="chemist")
   //////a short version with spread or reduce?
    


    const createList = (scienceType)=>{ ///new function to generate two lists 
     return(scienceType.map(person => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name}></img>
              <p>
                <b>{person.name}</b>
                  {' ' + person.profession + ' '}
                  known for {person.accomplishment}
              </p>
            </li>
          ))
     )
    }

/// return hard-coded categories (2 lists with  h3-title)
 
  return (
    <article>
      <h1>Scientists</h1>
      <h3>Chemists</h3>
      <ul>{createList(chemists)}</ul> 
      <h3>Other areas</h3>
      <ul>{createList(rest)}</ul>
    </article>
  );
  
}

export default List;