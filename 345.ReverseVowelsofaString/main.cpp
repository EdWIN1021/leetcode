#include <iostream>
#include <string>
#include <cstring>

using namespace std;

string reverseVowels(string s) {
    int l = 0 ;
    unsigned long r = s.size() - 1;

    while (l < r)
    {
         while (l < r && !strchr("aeiouAEIOU", s[l])) {
            l++;
        }
   
        while (l < r && !strchr("aeiouAEIOU", s[r])) {
            r--;
        }

        if(l < r) {
            char temp = s[l];
            s[l] = s[r];
            s[r] = temp;

            l++;
            r--;
        }
    }
    return s;
}

int main(int argc, const char * argv[]) {
    string str = "leetcode";
    reverseVowels(str);
    
    return 0;
}
