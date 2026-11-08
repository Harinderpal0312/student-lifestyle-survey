
# Debugging Analysis - Student Lifestyle Survey

## Breakpoint 1 - Getting Form Values

Location: script.js, line 50

I added this breakpoint to check if the form was getting the information I entered.

Before stepping over, the username value was not available yet.

After stepping over, I could see that the username was "Harinder123". This showed me that JavaScript was getting the correct value from the form.

Screenshots:
- breakpoint1_before.png
- breakpoint1_after.png

## Breakpoint 2 - Checking Name Validation

Location: script.js, line 66

I used this breakpoint to check how the name validation works.

Before stepping over, I could see that the name was "Harinderpal Kaur" and valid was true.

After stepping over, the debugger moved to line 71 because the name field was not empty. The valid value stayed true.

Screenshots:
- breakpoint2_before.png
- breakpoint2_after.png

## Breakpoint 3 - Checking Final Validation

Location: script.js, line 107

I added this breakpoint to check if the form passed validation.

Before stepping over, valid was true because the information I entered passed the checks.

After stepping over, the debugger moved to line 112, where the program starts creating a new table row.

Screenshots:
- breakpoint3_before.png
- breakpoint3_after.png

## Conclusion

I used three breakpoints to understand how my survey works. I checked how the form gets the values, how it validates the information, and what happens after validation.

I also tested submitting the form and clearing the responses. This helped me understand how JavaScript handles the form data.
