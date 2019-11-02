function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    return new RegExp(/^([aeiou]).*\1$/);
// (/^([key you are tersting for + rules from sytnat to test])\condinal terms/)
// EXP: new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);

    /*
     * Do not remove the return statement
     */
    return re;
}

/*SEE:
https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex
and
https://lunarscents.github.io/2019/06/08/regx1/
*/
