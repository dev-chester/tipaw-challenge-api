import app from "./app";

const runExpress = () => {
    const PORT = process.env.PORT || 3000;

    const server = app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (err) => {
    console.log("Unhandled rejection shutting down");
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on("SIGTERM", () => {
    console.log("Sigterm received. Shutting down gracefully");
    server.close(() => {
      console.log("Process terminated");
    });
  });
}

runExpress();