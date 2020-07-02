import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = ({ avatar, name, location, userName, bio, repos, blog, url, followers }) => (
  <div className="card">
    <Card href={url} target="_blank" wrapped ui={false} >
        <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header style={{ fontSize: "20px", fontFamily: 'Montserrat'}}>{name}</Card.Header>
        <Card.Description>{bio}</Card.Description>
        <Card.Meta>
          <span className="date" i class="fa fa-map-marker">
            {location}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Username - {userName}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Public repos - {repos}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Followers - {followers}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Description href={blog} target="_blank">Website/blog</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
