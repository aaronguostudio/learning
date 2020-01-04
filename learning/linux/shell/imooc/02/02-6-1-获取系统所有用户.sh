#!/bin/bash

# Get all users
# -d is separator
# -f 1 is get the first field after separating
index=1
for user in `cat /etc/passwd | cut -d ":" -f 1`
do
  echo "This is $index user:  $user"
  index=$(($index+1))
done


# Date
# Get year
date +%Y
echo "This is $(date +%Y) year"

# $(()) will operate
echo "This is $(($(date +%Y) + 1)) year"
echo "$(($(data +%j)/7)) weeks passed in this year"
