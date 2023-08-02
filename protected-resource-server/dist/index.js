"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("../secret-data/data.json"));
const cors = require("cors");
const morgan = require("morgan");
const app = (0, express_1.default)();
const port = 5000;
app.use(cors());
app.use(morgan("combined"));
app.get("/", (req, res) => {
    res.json(data_json_1.default);
});
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
