import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TodoList from "./TodoList";
import { Typography } from "@mui/material";

interface TodoContainerProps {
  title: string;
}

export default function TodoContainer({ title }: TodoContainerProps) {
  // valoszinu ide kene berakni az observert a storehoz... ezt majd még gondold át
  return (
    <Box py={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <TodoList />
        </CardContent>
        <CardActions>
          <Button size="small">Add Todo</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
