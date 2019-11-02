function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);


    /*
     * Do not remove the return statement
     */
    return re;
}


/*
https://www.hackerrank.com/challenges/js10-regexp-2/topics/javascript-regex
and
https://lunarscents.github.io/2019/06/08/regx2/
*/
