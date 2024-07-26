Bun.serve({
  fetch(_req) {
    return new Response(Bun.file("./index.html"));
  },
});