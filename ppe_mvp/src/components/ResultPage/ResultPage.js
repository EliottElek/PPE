import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function createData(activities, budget, duration, details) {
  return {
    activities:activities,
    budget,
    duration,
    details: details,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {row.activities.act}
           {row.activities.type === "restaurant" &&
            (<RestaurantIcon style={{ width: "15px" }} />)}
            {row.activities.type === "théatre" &&
            (<TheaterComedyIcon style={{ width: "15px" }} />)}
             {row.activities.type === "cinéma" &&
            (<TheatersIcon style={{ width: "15px" }} />)}
          </div>
        </TableCell>
        <TableCell align="right">{row.budget}</TableCell>
        <TableCell align="right">{row.duration}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                style={{ fontSize: "15px", fontWeight: "bold" }}
                gutterBottom
                component="div"
              >
                Détails
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Activité</TableCell>
                    <TableCell align="right">Trajet</TableCell>
                    <TableCell align="right">Prix par personne ~ (€)</TableCell>
                    <TableCell align="right">Réservation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.activity}>
                      <TableCell
                        className="activityRestaurant"
                        component="th"
                        scope="row"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          {detailsRow.activity}
                          <RestaurantIcon style={{ width: "15px" }} />
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {detailsRow.transports}
                      </TableCell>
                      <TableCell align="right">
                        {detailsRow.budgetPerPerson}
                      </TableCell>
                      <TableCell align="right">
                        <Button variant="contained">Réserver</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    budget: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        budgetPerPerson: PropTypes.number.isRequired,
        transports: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
      })
    ).isRequired,
    activities: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData({act: "Les Misérables", type: "théatre"}, 65, 3, [
    {
      activity: "Les Misérables, Théatre de Paris ",
      transports: "15 min, 1 changement",
      budgetPerPerson: 35,
    },
    {
      activity: "La bonne Franquette",
      transports: "3 minutes à pieds",
      budgetPerPerson: 30,
    },
  ]),
  createData({act:"Tenet", type: "cinéma"}, 50, 3, [
    {
      activity: "Tenet, Cinéma Pathé Place de Clichy ",
      transports: "15 min, 1 changement",
      budgetPerPerson: 35,
    },
    {
      activity: "Tonki sushis",
      transports: "3 minutes à pieds",
      budgetPerPerson: 18,
    },
  ]),
  createData({act:"L'embarras du choix", type: "théatre"}, 85, 3.5, [
    {
      activity: "L'embarras du choix,  Théatre des Mathurins ",
      transports: "20 min",
      budgetPerPerson: 35,
    },
    {
      activity: "D'chez eux",
      transports: "10 minutes, 1 changement",
      budgetPerPerson: 50,
    },
  ]),
];

const ResultPage = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  if (progress !== 100) {
    return (
      <div className="circularProgress">
        <CircularProgressWithLabel value={progress} />
      </div>
    );
  }
  return (
    <>
      <Typography variant="h6" color="primary" style={{ marginBottom: "12px" }}>
        Voici ce qu'on a trouvé pour vous...
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <strong>Activité</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Budget</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Durée (h)</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.activities} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="backButton">
        <Button component={Link} variant="contained" to="/home">
          Retour
        </Button>
      </div>
    </>
  );
};
export default ResultPage;
