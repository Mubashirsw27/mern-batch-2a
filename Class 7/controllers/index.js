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

const Todo = require("../model/Todo");

exports.postTodo = async (req, res) => {
  const body = req.body;
  const todo = new Todo(body);
  const data = await todo.save();
  console.log(data);
  if (data) {
    return res.status(200).json({
      message: "Data is saved",
      data
    });
  }
  return res.status(500).json({
    message: "Data not saved"
  })
};

exports.getTodo = async (req, res) => {
  const query = req.query; //** Question: req.body is working fine in GET request, but req.query is not **
  const getData = await Todo.findOne({
    title: query.title,
  });
  if (getData) {
    return res.status(200).json({
      message: "Data Retrieved",
      data: getData,
    })
  }

  return res.status(500).json({
    message: "Data not Found"
  })
};

exports.putTodo = async (req, res) => {
  const body = req.body;
  const updateData = await Todo.findOneAndUpdate({ title: "Mubashir Todo" }, body, { new: true })
  if (updateData) {
    return res.status(200).json({
      message: "Data updated",
      data: updateData
    })
  }
  return res.status(500).json({
    message: "Data not updated"
  })
}

exports.patchTodo = async (req, res) => {
  const body = req.body;
  const updateField = await Todo.findOneAndUpdate({ title: "Daily Work" }, { list: ["Eat Healthy"] }, { new: true })
  if (updateField) {
    return res.status(200).json({
      message: "Data updated",
      data: updateField
    })
  }
  return res.status(500).json({
    message: "Data not updated"
  })
}

exports.deleteTodo = async (req, res) => {
  const body = req.body;
  const deleteTodo = await Todo.findOneAndUpdate({ title: "Daily Work" }, { delete: true }, { new: true });
  if (deleteTodo) {
    return res.status(200).json({
      message: "Data is Deleted",
      data: deleteTodo,
    })
    return res.status(500).json({
      message: "Data is not found",

    })
  }
}


