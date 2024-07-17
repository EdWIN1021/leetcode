def gcdOfStrings(str1: str, str2: str) -> str:
        # Check if concatenated strings are equal, otherwise return an empty string
        if str1 + str2 != str2 + str1:
            return ""
        
        # Import the gcd function from the math module
        from math import gcd
        
        # Compute the greatest common divisor of the lengths of the two strings
        gcd_length = gcd(len(str1), len(str2))
        
        # Return the prefix of str1 (or str2) of length gcd_length
        return str1[:gcd_length]

print(gcdOfStrings("ABCDEF", "ABC"))