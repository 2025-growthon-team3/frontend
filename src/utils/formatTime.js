export function formatTime(timestamp) {
    if (!timestamp) return "";
    // Firestore Timestamp -> JS Date
    const date = timestamp.toDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}
