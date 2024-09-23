// 567. Permutation in String



// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.







/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    const len1 = s1.length, len2 = s2.length
    // If s1 is longer than s2, it's impossible for s2 to contain a permutation of s1
    if (len1 > len2) return false;

    let count = Array(26).fill(0)
    // Fill in the character counts for s1 and the first window of s2 (of size s1.length)
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i)-97]++; // increment count[s1[i]]
        count[s2.charCodeAt(i)-97]--; // decrement count[s2[i]]
    }

    if(!count.some(e => e !== 0)) return true   // if the array consists of only 0's return true

    // else:

    // Slide the window across s2
    for (let i = len1; i < len2; i++) {
        count[s2.charCodeAt(i)-97]-- // decrement the "new" letter in the sliding window
        count[s2.charCodeAt(i-len1)-97]++   // "reset" the previous letter that was in the window by incrementing 

        if (!count.some(e => e !== 0)) return true; // when the array only consists of 0's, return true
    }

    return false; // else return false
};