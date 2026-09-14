import { randomBytes } from "node:crypto";
import { createHash } from "node:crypto";

function generateCodeVerifier() {
  return randomBytes(32).toString("base64url");
}

function generateCodeChallenge(codeVerifier: string) {
  const hash = createHash("sha256");

  hash.update(codeVerifier);

  return hash.digest("base64url");
}

function testingPKCE() {
  const codeChallenge = generateCodeChallenge(
    "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
  );

  const expectedCodeChallenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM";

  return codeChallenge === expectedCodeChallenge;
}

export function GET(): Response {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);
  const state = randomBytes(32).toString("base64url");

  console.log("codeChallenge", codeChallenge);

  return new Response("A bejelentkezési végpont működik.");
}
