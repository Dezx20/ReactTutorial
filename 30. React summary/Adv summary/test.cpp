#include<iostream>
#include<map>
#include<string>
using namespace std;
int main(){
string s;
cin >> s;
map<char, int> freq;
for (int i = 0; i < s.size();i++){
    freq[s[i]]++;
}
int ans = 0;
for(auto i:freq){
    if(i.second == 1){
        ans++;
    }
}
cout << ans << "\n";
}
