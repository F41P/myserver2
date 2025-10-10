"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import userRoutes from "./UserRoutes";
const path = require("path");
const app = Express();
const mongoURI = "mongodb+srv://test:test54321@cluster0.qg8thda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB");
})
    .catch(error => {
    console.error("Error connecting to MongoDB:", error);
});
app.use(Express.json());
app.use((0, cors_1.default)());
app.use(Express.static(path.join(__dirname, 'public')));
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
// app.use("/api", userRoutes);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
