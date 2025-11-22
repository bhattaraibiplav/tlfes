export default async function getCurrentDateISO(): Promise<string> {
    const date = new Date();
    return date.toISOString();
}