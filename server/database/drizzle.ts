import {drizzle} from "drizzle-orm/libsql";

export function useDrizzle() {
  return drizzle( "file:local.db" );
}
