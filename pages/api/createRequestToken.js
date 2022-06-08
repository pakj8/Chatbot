import Ably from "ably/promises";

export default async function handler(req, res) {
  const client = new Ably.Realtime(
    `Gu-ZfA.BvdNWA:tIjtjZsDkdYQgGWmeoS6rOGC4oTLNgOPVLW9DZMUkxI`
  );
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "ably-nextjs-demo",
  });
  res.status(200).json(tokenRequestData);
}
