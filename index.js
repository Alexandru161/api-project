const express = require("express");
const app = express();
const PORT = 3000;

const productRoutes = require("./routes");

app.use(express.json());
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
