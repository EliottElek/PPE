import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Begin = () => {
  return (
    <div className="beginDiv">
      <Typography style={{ textAlign: "center" }}>
        Prêt à vous amuser ? Trouvez une activité près de chez vous !
      </Typography>
      <div className="spacer"></div>
      <Button component={Link} to={"/home"} variant="contained" size="large">
        C'est parti !
      </Button>
    </div>
  );
};

export default Begin;
