// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"; // adjust path based on your project structure

export const { GET, POST } = handlers;
