import { useDrizzle } from "../../database/drizzle";
import { user } from "../../database/schema";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  await useDrizzle().insert(user).values(body);
})