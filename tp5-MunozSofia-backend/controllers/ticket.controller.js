const Ticket = require("../models/ticket");
const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
  const { tipo } = req.query;
  if (tipo != null)
    var tickets = await Ticket.find({ categoriaEspectador: tipo }).populate("espectador");
  else var tickets = await Ticket.find().populate("espectador");
  res.json(tickets);
};

ticketCtrl.getTicket = async (req, res) => {
  var ticket = await Ticket.findById(req.params.id).populate("espectador");
  res.json(ticket);
};

ticketCtrl.createTicket = async (req, res) => {
  var ticket = new Ticket(req.body);
  try {
    await ticket.save();
    res.json({
      status: "1",
      msg: "Ticket guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

ticketCtrl.deleteTicket = async (req, res) => {
  try {
    await Ticket.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Ticket removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

ticketCtrl.editTicket = async (req, res) => {
  const ticket = new Ticket(req.body);
  try {
    await Ticket.updateOne({ _id: req.body._id }, ticket);
    res.json({
      status: "1",
      msg: "Ticket updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

module.exports = ticketCtrl;
