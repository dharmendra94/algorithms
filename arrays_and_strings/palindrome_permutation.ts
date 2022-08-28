/**
 * Check if a string is a permutation of a palindrome
 *
 * Notes: To do this, we need to understand the definition of palindrome, it is a word
 * where it is an even length string with count of each character is even and atmost one can
 * have an odd count when the string length is odd
 */
export function palindromePermutation(str: string): boolean {
    // If we receive a null string, we return false
    if (!str) return false;

    if (str.length === 1) return true;

    // Let's keep the count of each character in a map
    const map = new Map<string, number>();

    Array.from(str).map((char) => {
        if (char === " ") return;
        let count = map.get(char) ?? 0 + 1;
        map.has(char) ? map.set(char, count) : map.set(char, count);
    });

    const isEven = str.length % 2 === 0;

    // Number of odd count characters allowed in the string
    let numberOfAllowedOddCounts = isEven ? 0 : 1;

    map.forEach(count => {
        const isCharEven = count % 2 === 0;
        if (!isCharEven) {
            if (numberOfAllowedOddCounts > 0) {
                numberOfAllowedOddCounts--;         
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    return true;
}
