export function isUnique(str: string) {
    const set = new Set<string>();

    Array.from(str).map((char) => set.add(char))

    return str.length === set.size;
}