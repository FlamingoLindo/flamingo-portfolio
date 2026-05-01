// FIX change the church_ost to some other one, the start is really loud
const audioFiles = import.meta.glob('/src/lib/assets/audios/*',
    { eager: true, query: '?url', import: 'default' });

export function getRandomOST(): string {
    const files = Object.values(audioFiles) as string[];
    if (files.length === 0) return '';
    return files[Math.floor(Math.random() * files.length)];
}