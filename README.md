# phone-number-validator

Return true if the passed string looks like a valid US phone number.<br>
The user may fill out the form field any way they choose as long as it has the format of a valid US number.<br><br>
Some sample tests:
```

"1 555-555-5555" should return true.

"1 (555) 555-5555" should return true.

"5555555555" should return true.

"555-555-5555" should return true.

"(555)555-5555" should return true.

"1(555)555-5555" should return true.

"555-5555" should return false.

"5555555" should return false.

"1 555)555-5555" should return false.

"1 555 555 5555" should return true.

"1 456 789 4444" should return true.

"+1 555 555 5555" should return true.

"+1-555 555 5555" should return true.

"+1555 555 5555" should return true.

"+555 555 5555" should return false.

"123**&!!asdf#" should return false.

"55555555" should return false.

"(6054756961)" should return false.

"2 (757) 622-7382" should return false.

"0 (757) 622-7382" should return false.

"-1 (757) 622-7382" should return false.

"2 757 622-7382" should return false.

"10 (757) 622-7382" should return false.

"27576227382" should return false.

"(275)76227382" should return false.

"2(757)6227382" should return false.

"2(757)622-7382" should return false.

"555)-555-5555" should return false.

"(555-555-5555" should return false.

"(555)5(55?)-5555" should return false.

"55 55-55-555-5" should return false.
```
