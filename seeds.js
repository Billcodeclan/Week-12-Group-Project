use path_finder;
db.dropDatabase();

db.locations.insert([
  {
  name: "TEST LOCATION 1",
  latlng: { lat: 55.051556, lng: -1.627601000000027 }
  },
  {
  name: "TEST LOCATION 2",
  latlng: { lat: 55.05944599999999, lng: -1.6299360000000434 }
  },
  {
    name: "Barras Bridge",
    latlng: {lat: 54.978528, lng: -1.610805}
  },
  {
    name: "Forth Banks",
    latlng: {lat: 54.966596, lng: -1.618418}
  },
  {
    name: "Ponteland Road",
    latlng: {lat: 55.001571, lng: -1.667013}
  },
  {
    name: "Newcastle City Hall",
    latlng: {lat: 54.977068, lng: -1.610123}
  },
  {
    name: "High Street Gateshead",
    latlng: {lat: 54.962064, lng: -1.600266}
  },
  {
    name: "intu Eldon Square",
    latlng: {lat: 54.9752, lng: -1.6151}
  }

]);

db.walks.insert([
  {
    name: "High Steet Walk",
    start: "High Street",
    finish: "High Street Gateside",
    completed: false
  },
  {
    name: "Bridge to Banks",
    start: "Barras Bridge",
    finish: "Forth Banks",
    completed: true
  }
//trying to seed with this code didn't work until
//i added in the comma after the curly bracket
//just there....weird!

]);
