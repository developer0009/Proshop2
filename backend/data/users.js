import bcryptjs from "bcryptjs";
const users = [
  {
    name: "zaheer",
    email: "uzaheer251@gmail.com",
    password: bcryptjs.hashSync("zaheer786"),
    isAdmin: true,
  },
  {
    name: "suraj",
    email: "surajmishra@gmail.com",
    password: bcryptjs.hashSync("uddin786"),
    isAdmin: true,
  },
  {
    name: "zubair",
    email: "zubair_khan@gmail.com",
    password: bcryptjs.hashSync("uddin786"),
    isAdmin: true,
  },
];
export default users;
