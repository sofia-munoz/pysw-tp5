const Transaccion = require("../models/transaccion");
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) => {
  const { email } = req.query;
  if(email!=null)
    var transacciones = await Transaccion.find({ emailCliente: email});
  else
    var transacciones = await Transaccion.find();
  res.json(transacciones);
};

transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
  try {
    await transaccion.save();
    res.json({
      status: "1",
      msg: "Transaccion guardada.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

transaccionCtrl.getTransPorOrigenDestino = async (req, res) => {
  const { monedaOrigen, monedaDestino } = req.query;
  const transacciones = await Transaccion.find({
    monedaOrigen: monedaOrigen,
    monedaDestino: monedaDestino,
  });
  res.json(transacciones);
};

module.exports = transaccionCtrl;
