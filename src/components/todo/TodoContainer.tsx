import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function TodoList() {
  return (
    <Box py={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TodoList />
        </CardContent>
        <CardActions>
          <Button size="small">Add Todo</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
