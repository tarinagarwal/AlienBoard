import { initTRPC } from "@trpc/server";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import superjson from "superjson";
import { ZodError } from "zod";


export const createTRPCContext = (opts: CreateExpressContextOptions) => {
  return {
    req: opts.req,
    res: opts.res,
  };
};


const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});


export const createCallerFactory = t.createCallerFactory;


export const createTRPCRouter = t.router;


const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (process.env.NODE_ENV === 'development') {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});


export const publicProcedure = t.procedure.use(timingMiddleware);