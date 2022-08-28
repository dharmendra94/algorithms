/**
 * Check if these two strings are one edit away to become similar to each other
 * @param str1
 * @param str2
 */
export function oneWay(str1: string, str2: string): boolean {
    if (str1 === str2) return false;

    if (str1.length === str2.length) {
        return oneEditReplace(str1, str2);
    } else if (str1.length + 1 === str2.length) {
        return oneEditInsert(str1, str2);
    } else if (str1.length === str2.length + 1) {
        return oneEditInsert(str2, str1);
    }

    return false;
}

function oneEditReplace(str1: string, str2: string): boolean {
    let differenceFound = false;

    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            if (differenceFound) {
                return false;
            }

            differenceFound = true;
        }
    }

    return differenceFound;
}

/**
 * Check if we can insert a character into str2 to make s1
 * @param str1
 * @param str2
 * @returns
 */
function oneEditInsert(str1: string, str2: string) {
    let index1 = 0,
        index2 = 0;
    while (index1 < str1.length && index2 < str2.length) {
        if (str1.charAt(index1) !== str2.charAt(index2)) {
            if (index1 != index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }

    return true;
}
