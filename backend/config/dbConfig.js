import mongoose from "mongoose";

const dbURI = ""
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })