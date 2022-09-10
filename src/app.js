import "./style.css";

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["teacher", "cat", "drummer", "mother", "personal trainer"];
  let action = ["played my", "forked my", "wet my", "canned my"];
  let possesion = ["book", "chair", "iphone", "water jug"];
  let where = [
    "at the pool",
    "at the house",
    "on the boat",
    "on the carnival cruise"
  ];

  let pronounIndex = pronoun[Math.floor(Math.random()) * pronoun.length];
  let subjectIndex = subject[Math.floor(Math.random()) * subject.length];
  let actionIndex = action[Math.floor(Math.random()) * action.length];
  let possesionIndex = possesion[Math.floor(Math.random()) * possesion.length];
  let whereIndex = where[Math.floor(Math.random()) * where.length];

  return (
    pronounIndex +
    " " +
    subjectIndex +
    " " +
    actionIndex +
    " " +
    possesionIndex +
    " " +
    whereIndex
  );
};
document.getElementById("the-excuse").innerHTML = generateExcuse();
