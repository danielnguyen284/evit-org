async function check() {
  const url = "https://evit-org.com/wp-content/uploads/2024/01/Philippine-vs-Vietnam-1-300x186.jpg";
  try {
    const res = await fetch(url, { method: 'HEAD' });
    console.log("Image status:", res.status);
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
  } catch (err) {
    console.error("Error fetching image:", err);
  }
}
check();
