var mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.99.100:32771"+'/advice');
var AdviceSchema = mongoose.Schema({ tip: String });

var advice = mongoose.model('Advice', AdviceSchema);
module.exports = mongoose.model('advice', AdviceSchema);  


