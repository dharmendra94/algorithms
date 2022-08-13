/**
 * You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

    There are two types of logs:

    Letter-logs: All words (except the identifier) consist of lowercase English letters.
    Digit-logs: All words (except the identifier) consist of digits.
    Reorder these logs so that:

    The letter-logs come before all digit-logs.
    The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
    The digit-logs maintain their relative ordering.
    Return the final order of the logs.
 * @param logs 
 * @returns 
 */
export function reOrderLogFiles(logs: string[]): string[] {
    return logs.sort(comparatorFn);
}

function comparatorFn(ele1: string, ele2: string): number {
    const ele1ContentIndex = ele1.indexOf(" ") + 1;
    const ele2ContentIndex = ele2.indexOf(" ") + 1;

    const ele1Content = ele1.slice(ele1ContentIndex);
    const ele2Content = ele2.slice(ele2ContentIndex);

    const ele1Type = ele1Content.slice(0, ele1Content.indexOf(" "));
    const ele2Type = ele2Content.slice(0, ele2Content.indexOf(" "));

    const ele1IsLetLog = !Number.isFinite(Number(ele1Type));
    const ele2IsLetLog = !Number.isFinite(Number(ele2Type));

    // If both of them are digit logs keep the order as it is
    if (!ele1IsLetLog && !ele2IsLetLog) {
        return 0;
    }

    // If it is a letter log, it should come before all the digit logs
    if (ele1IsLetLog && !ele2IsLetLog) {
        return -1;
    }

    if (!ele1IsLetLog && ele2IsLetLog) {
        return 1;
    }

    // If log content is same, sort by log identifier
    if (ele1Content === ele2Content) {
        const ele1Identifier = ele1.slice(0, ele1ContentIndex - 1);
        const ele2Identifier = ele2.slice(0, ele2ContentIndex - 1);
        return compareStr(ele1Identifier, ele2Identifier);
    }

    return compareStr(ele1Content, ele2Content);
}

function compareStr(ele1: string, ele2: string): number {
    ele1 = ele1.toLowerCase();
    ele2 = ele2.toLowerCase();

    if (ele1 < ele2) {
        return -1;
    } else if (ele1 > ele2) {
        return 1;
    } else {
        return 0;
    }
}
