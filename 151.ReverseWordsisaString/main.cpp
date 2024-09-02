#include <iostream>
#include <string>

using namespace std;

string reverseWords(string s) {
    string reversed = "";
    int left = s.length() - 1;
    int right = left;

    while (left >= 0) {
        while (right >= 0 && s[right] == ' ') {
            right--;
        }

        left = right;

        while (left >= 0 && s[left] != ' ') {
            left--;
        }

        if (right >= 0) {
            reversed += s.substr(left + 1, right - left) + ' ';
        }

        right = left;
    }

    if (!reversed.empty() && reversed.back() == ' ') {
        reversed.pop_back();
    }
    return reversed;
}

int main()
{
    std::cout << reverseWords("the sky is blue") << std::endl;
    return 0;
}
