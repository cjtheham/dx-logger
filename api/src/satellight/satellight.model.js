"use strict";
exports.__esModule = true;
exports.SatellightSchema = void 0;
var mongoose = require("mongoose");
exports.SatellightSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    satellightName: { type: String, required: true }
});