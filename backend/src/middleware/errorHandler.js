// Catches errors from async route handlers so you don't need try/catch everywhere
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Final error handler — must be registered last in server.js
const errorHandler = (err, req, res, next) => {
  console.error("UNHANDLED ERROR:", err);

  // Prisma known error codes
  if (err.code === "P2002") {
    return res.status(409).json({ error: `Duplicate value for field: ${err.meta?.target}` });
  }
  if (err.code === "P2025") {
    return res.status(404).json({ error: "Record not found" });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || "Something went wrong on the server",
  });
};

const notFound = (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

export { asyncHandler, errorHandler, notFound };
