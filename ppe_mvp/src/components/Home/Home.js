import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ModalBox from "../ModalBox/ModalBox";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const marks = [
    {
      value: 0,
      label: "0€",
    },
    {
      value: 100,
      label: "100€",
    },
  ];
  const cities = [
    { label: "Me localiser", country: "(ma position)" },
    { label: "Paris", country: "France" },
    { label: "Bordeaux", country: "France" },
    { label: "Lyon", country: "France" },
    { label: "Toulouse", country: "France" },
  ];
  const activities = [
    { label: "Culinaire (restaurant, dégustation...)" },
    { label: "Culturelle (exposition, musée..." },
    { label: "Spectacle vivant (théatre, danse...)" },
    { label: "Cinéma" },
    { label: "Peu importe, suprends-moi" },
  ];
  const durations = [
    { label: "1-2 heures" },
    { label: "2-3 heures" },
    { label: "3-4 heures" },
    { label: "+4 heures" },
    { label: "Peu importe, suprends-moi" },
  ];
  const showOptions = () => {
    return (
      <>
        <div className="spacer"></div>
        <Autocomplete
          id="duration-select-demo"
          sx={{ width: 300 }}
          options={durations}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Durée du moment"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <div className="spacer"></div>
        <Box sx={{ width: 300 }}>
          <Typography id="input-slider" gutterBottom>
            Budget (par personne)
          </Typography>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <Button variant="contained" onClick={handleClose}>
          Terminer
        </Button>
      </>
    );
  };
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: "12px" }} color="primary">
        Prêt à vous amuser ?
      </Typography>
      <ModalBox handleClose={handleClose} open={open}>
        {showOptions()}
      </ModalBox>
      <Autocomplete
        id="city-select-demo"
        sx={{ width: 300 }}
        options={cities}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.label}, {option.country}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Localisation"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div className="spacer"></div>
      <Autocomplete
        id="activities-select-demo"
        sx={{ width: 300 }}
        options={activities}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Activité"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Button onClick={handleOpen}>Plus d'options</Button>

      <div className="buttonDiv">
        <Button
          style={{ borderRadius: "30px" }}
          variant="contained"
          size="large"
          className="buttonGo"
          component={Link}
          to={"/result"}
        >
          C'est parti !
        </Button>
      </div>
    </div>
  );
};

export default Home;
