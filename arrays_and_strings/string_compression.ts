export function stringCompression(str: string) {
    if (!str) return undefined;

    if (str.length <= 2) return str;

    let charCountMap: Record<string, number> = {};

    const resultArr: (string | number)[] = [];

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (charCountMap[char]) {
            let count = charCountMap[char] + 1;
            charCountMap[char] = count;

            resultArr[resultArr.length - 1] =
                Number(resultArr[resultArr.length - 1]) + 1;
        } else {
            resultArr.push(char);
            resultArr.push(1);
            charCountMap = {};
            charCountMap[char] = 1;
        }
    }

    // If the resultant string length is less than the length of the string passed
    // then we can return the same input string
    return resultArr.length < str.length ? resultArr.join("") : str;
}
