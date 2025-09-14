import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}

const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

export const mermaidRouter = createTRPCRouter({
  toMer: publicProcedure
    .input(
      z.object({
        str: z.string(),
        current: z.string(),
        error: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      try {
        console.log("INPUT: ", input.str);
        console.log("CURRENT: ", input.current);
        console.log("ERROR: ", input.error);
        let prompt =
          "You are a diagramming expert. You are an expert in creating diagrams using the Mermaid syntax.\n" +
          "Your job is to create detailed diagrams using the Mermaid syntax for various use cases described by the current user.\n" +
          "IMPORTANT: Only use these supported diagram types:\n" +
          "- flowcharts: 'graph TD', 'graph LR', 'graph TB', 'graph BT'\n" +
          "- class diagrams: 'classDiagram'\n" +
          "- sequence diagrams: 'sequenceDiagram'\n" +
          "If the user requests an ER diagram, Gantt chart, or other unsupported type, convert it to a flowchart instead.\n" +
          "For ER diagrams, use rectangles for entities and arrows for relationships.\n" +
          "For Gantt charts, use a flowchart with timeline structure.\n" +
          "YOU MUST RESPOND IN MERMAID SYNTAX. RESPONSES THAT ARE NOT A MERMAID CODEBLOCK WILL BE INVALID.\n";
        "If there is already Mermaid syntax in the prompt, you must attempt to modify the diagram as described by the user rather than starting from scratch.\n" +
          "YOU MUST RESPOND IN MERMAID SYNTAX. RESPONSES THAT ARE NOT A MERMAID CODEBLOCK WILL BE INVALID.\n" +
          "Notes: You can draw circles by using 2 parenthesis.\n";

        if (input.error) {
          prompt +=
            "\nIMPORTANT: The current diagram that was generated had a parsing error on the frontend: " +
            input.error +
            "\n" +
            "Please fix the syntax issues and ensure the Mermaid diagram is valid and properly formatted.\n" +
            "Focus on correcting any syntax errors, invalid node names, or malformed connections. Do not \n";
        }

        prompt += "The current prompt is: " + input.str;

        if (input.current) {
          prompt += "\nThe current diagram is: " + input.current;
        }

        const result = await model.generateContent([prompt]);
        console.log("RESULT: ", result.response.text());
        return result.response.text();
      } catch (error) {
        console.error("Error generating Mermaid diagram:", error);
        throw new Error("Failed to generate Mermaid diagram.");
      }
    }),
});
