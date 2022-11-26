import { Avatar, Header } from "./Avatar";
import CollapseDiv from "./CollapseDiv";

export default function Profile({ person }) {
  return (
    <CollapseDiv>
    <div className="profile-box">
    
        <Header name={person.name} />
        <Avatar image={person} />
     
    </div>
    </CollapseDiv>
  );
}
