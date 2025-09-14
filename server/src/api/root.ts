import { mermaidRouter } from "./routers/mermaid.js";
import { createCallerFactory, createTRPCRouter } from "./trpc.js";


export const appRouter = createTRPCRouter({
  mermaid: mermaidRouter,
});


export type AppRouter = typeof appRouter;


export const createCaller = createCallerFactory(appRouter);