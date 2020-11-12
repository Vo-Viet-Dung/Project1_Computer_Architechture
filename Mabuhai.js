 function Dialogv5ed3679927243() {
     var me = this;
     me.id = "dialogv5ed3679927243";
     //Tra ve gia tri cua so nhap vao
     me.GetElement = function() { return document.getElementById(me.id); };
     //Tra ve ten cua hop thoai quan ly
     me.GetEventHandlerName = function() { return "dialoghandlerv5ed3679927243"; };

     this.dialog_controls = [new DialogInput("input", this, new ValidatorNumber(true, false), new ElementAccessorNumber(), new ValidatorNumber(true, false)),
         new DialogInput("n", this, new ValidatorNumber(false, false), new ElementAccessorNumber(), new ValidatorNumber(false, false)),
         new DialogInput("calculate", this, 0, new ElementAccessorOperation()),
         new DialogInput("_progress_", this, 0, new ElementAccessorDefault()),
         new DialogInput("range", this, 0, new ElementAccessorOutput()),
         new DialogInput("representation", this, 0, new ElementAccessorOutput()),
         new DialogInput("inverse", this, 0, new ElementAccessorOutput()),
         new DialogInput("complement", this, 0, new ElementAccessorOutput())
     ];

     me.dialog_controls._all = {};
     me.dialog_controls.forEach(function(e) {
         if (me[e.id] === undefined) me[e.id] = e;
         me.dialog_controls._all[e.id] = e;
     });
     this.addHandler = function(handler) { this.dialog_controls.forEach(function(c) { c.addHandler(handler); }); };
     this.SetValues = function(values) { this.dialog_controls.forEach(function(c) { if (values[c.id] !== undefined) { c.SetValue(values[c.id]); } }); };
     this.Clear = function() { this.dialog_controls.forEach(function(c) { c.ResetValue(); }); };
     this.SetDefaultValues = function() { this.Clear(); };
     this.GetValues = function() {
         var ret = {};
         this.dialog_controls.forEach(function(c) { ret[c.id] = c.GetValue(); });
         return ret;
     };
     this.Validate = function() {
         for (var i = 0; i < me.dialog_controls.length; ++i)
             if (!me.dialog_controls[i].Validate()) return false;
         return true;
     };
     this.layout = function() {}
 };
 document.addEventListener("DOMContentLoaded", function(event) {
     var dlg = new Dialogv5ed3679927243();
     var hd = new CalculatorHandler(new function() {
         var me = this;
         me.id = 748;
         me.global = 1;
         var outputs = {};
         me.sinks = { change: [], done: [] };
         me.startOnLoad = 1;
         me.infinite = 0;
         var inputs = {};
         var renderers = {};
         var recordsets = {};
         var diagrams = {};
         var handler, dialog, refreshTimer;
         var worker;
         var proxies;
         var stubs;
         var outer = this;
         var Planetcalc = new function() {
             var inner = this;
             var Planetcalc = inner;
             var cpcData = new CalcProgressData();
             var Calculate748_cpc = new CalcProgressControl(cpcData);
             var Resources748res = { "overflow": "Overflow - not enough binary digits to display this value" };
             inner.Resources748res = Resources748res;
             inner.Calculate748 = function(___inp___) {
                 var progressControl = Calculate748_cpc;
                 var Calculate748_result = {};

                 function __impl__(__inp__) {

                     var input = __inp__["input"] === undefined ? -12 : __inp__["input"];
                     var n = __inp__["n"] === undefined ? 8 : __inp__["n"];
                     var res = Resources748res;
                     var range = { "SetValue": function(v) { Calculate748_result["range"] = v; } };
                     var representation = { "SetValue": function(v) { Calculate748_result["representation"] = v; } };
                     var inverse = { "SetValue": function(v) { Calculate748_result["inverse"] = v; } };
                     var complement = { "SetValue": function(v) { Calculate748_result["complement"] = v; } };
                     var upper = Math.pow(2, n) / 2 - 1;
                     var lower = -Math.pow(2, n) / 2;

                     function padZeros(num) {
                         var res = num;
                         for (var i = 0; i < n - num.length; ++i)
                             res = "0" + res;
                         return res;
                     }

                     range.SetValue("[" + lower + "," + upper + "]");
                     if (input > upper || input < lower) {
                         representation.SetValue(res.overflow);
                         inverse.SetValue(res.overflow);
                         complement.SetValue(res.overflow);
                     } else {
                         if (input >= 0) {
                             representation.SetValue(padZeros(input.toString(2)));
                             inverse.SetValue(padZeros(input.toString(2)));
                             complement.SetValue(padZeros(input.toString(2)));
                             /*
                             representation.SetValue(padZeros(input.toString(2)));
                             var inv = (Math.pow(2,n) - 1) - input;
                             inverse.SetValue(padZeros(inv.toString(2)));
                             var com = inv + 1;
                             complement.SetValue(padZeros(com.toString(2)));
                             */
                         } else {
                             input = Math.abs(input);
                             representation.SetValue(padZeros(input.toString(2)));
                             var inv = (Math.pow(2, n) - 1) - input;
                             inverse.SetValue(padZeros(inv.toString(2)));
                             var com = inv + 1;
                             complement.SetValue(padZeros(com.toString(2)));
                             /*
                             var com = input + Math.pow(2,n);
                             var com = -input;
                             representation.SetValue(padZeros(com.toString(2)));
                             var inv = (Math.pow(2,n) - 1) - com;
                             inverse.SetValue(padZeros(inv.toString(2)));
                             complement.SetValue(padZeros(Math.abs(input).toString(2)));
                             */
                         }
                     }
                 };
                 __impl__(___inp___);
                 if (progressControl.completed()) { progressControl.context = null; }
                 return Calculate748_result;
             };
             inner.main = inner.Calculate748;
             inner.progressControl = Calculate748_cpc;
             inner.init = function() { inner.progressControl.onDataReady(); };
         };
         me.adapter = null;

         function startLoad() {
             me.progressControl.addEventListener("ready", handler.onReady);
             Planetcalc.init();
         }
         me.timeout = 1500;
         me.auto = 1;
         me.init = function(h, dlg) {
             var o;
             handler = h;
             dialog = dlg;
             me.progressControl = Planetcalc.progressControl;
             var n;
             var fn;
             n = 'input';
             if (dlg[n]) { inputs[n] = dlg[n]; }
             n = 'n';
             if (dlg[n]) { inputs[n] = dlg[n]; }
             o = dlg.range;
             outputs[o.id] = o;
             o.formatter = new FormatterSame();
             o = dlg.representation;
             outputs[o.id] = o;
             o.formatter = new FormatterSame();
             o = dlg.inverse;
             outputs[o.id] = o;
             o.formatter = new FormatterSame();
             o = dlg.complement;
             outputs[o.id] = o;
             o.formatter = new FormatterSame();
             startLoad();
         };
         me.stop = function() {
             if (worker) worker.postMessage({ type: "stop" });
             else Planetcalc.progressControl.stop();
         };
         me.start = function() {
             handler.onStart();
             if (worker) {
                 me.changeDisplayOptions();
                 worker.postMessage({ type: "start", inputs: proxies(dialog.GetValues()) });
             } else {
                 inputValues = { "input": Number(inputs.input.GetValue()), "n": Number(inputs.n.GetValue()) };
                 Planetcalc.progressControl.clear();
                 me.result = null;
                 me.refresh();
             }
         };
         me.getInputs = function() {
             return inputs;
         };

         function objectValues(a, o) {
             for (var n in o) {
                 a.push(o[n]);
             }
         }
         me.getOutputs = function() {
             var ret = [];
             objectValues(ret, outputs);
             objectValues(ret, diagrams);
             objectValues(ret, renderers);
             return ret;
         };
         me.refresh = function() { me.doit(); };
         me.setResult = function(res, done) {
             outputs.range.SetValue(res.range);
             outputs.representation.SetValue(res.representation);
             outputs.inverse.SetValue(res.inverse);
             outputs.complement.SetValue(res.complement);
             if (done) {
                 handler.onStop();
                 if (PCF.requestFormulaUpdate(false)) {
                     var mjx = window.MathJax;
                     mjx.Hub.Queue(["Typeset", mjx.Hub]);
                 };
             }
         };

         function preprocess(p, cb) { cb(p, true); }
         var inputValues = null;
         me.doit = function() {
             preprocess(inputValues, function(p, sync, cont) {
                 if (cont) me.progressControl.repeat();
                 try {
                     me.changeDisplayOptions();
                     var res = Planetcalc.Calculate748(p);
                     if (res) { if (me.result) { for (var n in res) me.result[n] = res[n]; } else me.result = res; }
                     if (me.result) me.setResult(me.result, true);
                 } catch (e) {
                     handler.onStop(e);
                 }
             });
         };
         me.changeDisplayOptions = function() {
             me.calculateDisplay(new DisplayWrapperInput(inputs.input), new DisplayWrapperInput(inputs.n), { GetValue: function() { return Planetcalc.Resources748res; } }, new DisplayWrapper(outputs.range), new DisplayWrapper(outputs.representation), new DisplayWrapper(outputs.inverse), new DisplayWrapper(outputs.complement));
             dialog.layout();
         }
         me.calculateDisplay = function(input, n, res, range, representation, inverse, complement) {};
     }, { calculate: "Calculate", stop: "Stop" });;
     hd.initdialog(dlg);
     dlg.addHandler(hd);
     window.dialoghandlerv5ed3679927243 = hd;
 });