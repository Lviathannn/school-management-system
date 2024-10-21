import { db } from '.';
import { migrate } from "drizzle-orm/libsql/migrator";
import path from "path";


(async () => {
    console.log("Migrating database...");
    await migrate(db, {
        migrationsFolder: path.join(__dirname, "./migrations"),
    })
    console.log("Migration complete...");
})();