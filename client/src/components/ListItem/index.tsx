import React from "react";

type ListItemProps = {
  name: String;
  category: String;
  description: String;
  instructions: String;
  createdDate: String;
  likes: Number;
};

const ListItem: React.FC<ListItemProps> = ({
  name,
  category,
  description,
  instructions,
  createdDate,
  likes,
}) => (
  <>
    <span>name: {name}</span>
    <span>description: {description}</span>
    <span>category: {category}</span>
    <span>instructions: {instructions}</span>
    <span>createdDate: {createdDate}</span>
    <span>likes: {likes}</span>
  </>
);

export default ListItem;
