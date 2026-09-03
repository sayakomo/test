export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  const {
    Type,
    Versi,
    Device
  } = req.body || {};

  return res.status(200).json({
    FYF: [
      {
        ID: Versi || "",
        Device: Device || "",
        Versi: Type || "",
        Admin: "Telegram @b374a",
        Expired: "04-09-2029",
        ON: false,
        OFF: false,
        BUS: "ca-app-pub-6654559110094293/5995432864",
        MRT: "ca-app-pub-6654559110094293/6051273181#"
      }
    ]
  });
}