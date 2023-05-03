module.exports.print = console.log;

// Initialize test data
module.exports.users = [
  { id: 1, username: "default1" },
  { id: 2, username: "default2" },
  { id: 3, username: "default3" }
];

module.exports.logTime = () => {
  const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let d = new Date().toLocaleTimeString();

  console.log(`Time launched: ${d} UTC`);

  let day = new Date().getDay();

  for (let i = 0; i < dayArr.length; i++) {
    switch (day) {
      case i:
        console.log(dayArr[i]);
        break;
    }
  }
}

/**
 * For all response functions
 * @param {Response} res Res object from express.
 * @param {Object} callback JSON data to send. 
*/
module.exports.success = (res, data) => {
    res.status(200).send(data);
}

module.exports.notfound = (res, data) => {
    res.status(404).send(data);
}

module.exports.badreq = (res, data) => {
    res.status(400).send(data);
}

module.exports.unauth = (res, data) => {
    res.status(401).send(data);
}
