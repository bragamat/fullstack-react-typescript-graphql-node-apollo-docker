import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../queries";

import ListItem from "./ListItem";
import { ListStyle } from "./styles";

type ListItemProps = {
  name: String;
  category: String;
  description: String;
  instructions: String;
  createdDate: String;
  likes: Number;
};

const CompApp = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);
  if (loading) return <h1>loading ....</h1>;
  if (error) return <h1>There was an Error</h1>;

  return (
    <div>
      Home
      <ListStyle>
        {data.recipes.map((recipe: ListItemProps) => (
          <ListItem key={Math.random()} {...recipe} />
        ))}
      </ListStyle>
    </div>
  );
};

export default CompApp;
