export function isPermutation(str1: string, str2: string): boolean {
    if (!str1 || !str2) return false;

    if (str1.length !== str2.length) return false;

    const uniqueCharsStr1 = new Set<string>();

    for (let i = 0; i < str1.length; i++) {
        const char = str1.charAt(i);
        uniqueCharsStr1.add(char);
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2.charAt(i);
        if (!uniqueCharsStr1.has(char)) return false;
    }

    return true;
}
