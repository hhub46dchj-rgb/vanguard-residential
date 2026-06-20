// Generate a bcrypt hash for a password to use as ADMIN_PASSWORD_HASH.
// Usage:  npm run hash-password   (then paste the hash into .env)
import bcrypt from "bcryptjs";
import { createInterface } from "readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  const pwd =
    process.argv[2] ??
    (await rl.question("Enter the admin password to hash: "));

  if (!pwd || pwd.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const hash = await bcrypt.hash(pwd, 10);
  console.log("\nPaste this into .env as ADMIN_PASSWORD_HASH:\n");
  console.log(hash);
  rl.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
