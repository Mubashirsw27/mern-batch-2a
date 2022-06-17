// exports.getTodo = (req, res) => {
//   const query = req.query;
//   const todo = {
//     title: query.title,
//     list: query.list,
//   };
//   return res.status(200).json(todo);
// };

// exports.postTodo = (req, res) => {
//   const body = req.body;
//   const todo = {
//     title: body.title,
//     list: body.list,
//   };
//   return res.status(200).json(todo);
// };

// exports.putTodo = (req, res) => {
//   const body = req.body;
//   const todo = {
//     title: body.title,
//     list: body.list,
//   };
//   return res.status(200).json(todo);
// };

// exports.patchTodo = (req, res) => {
//   const body = req.body;
//   const todo = {
//     title: body.title,
//     list: body.list,
//   };
//   return res.status(200).json(todo);
// };

// exports.deleteTodo = (req, res) => {
//   const body = req.body;
//   body.list.pop()
//   const todo = {
//     title: body.title,
//     list: body.list,
//   };
//   return res.status(200).json(todo);
// };

const Test = require("../model/test");

exports.postTodo = async (req, res) => {
  const body = req.body;
  const test = new Test(body);
  // test.save().then(() => console.log("data saved"));
  const data = await test.save();

  console.log(data);
  return res.status(200).json({
    message: "Data is saved",
    data: data,
  });
};

exports.getTodo = async (req, res) => {
  const body = req.body; //** Question: req.body is working fine in GET request, but req.query is not **
  const getData = await Test.findOne({
    title: body.title,
  })
    return res.status(200).json({
      message:"Data Retrieved",
      data: getData,
    })
};
