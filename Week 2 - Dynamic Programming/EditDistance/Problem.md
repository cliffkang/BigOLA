Finding the edit distance between two strings

The Levenshtein distance is a measure of dissimilarity between two Strings.  Mathematically, given two Strings x and y, the distance measures the minimum number of character edits required to transform x into y.

Typically three type of edits are allowed:

Insertion of a character c
Deletion of a character c
Substitution of a character c with c‘
Example: If x = ‘shot’ and y = ‘spot’, the edit distance between the two is 1 because ‘shot’ can be converted to ‘spot’ by substituting ‘h‘ to ‘p‘.

Solution: O(N*M) where N and M are the lengths of the two strings
