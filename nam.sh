echo "hello people"
echo "this is the demo file"
echo "this file is temporary"
echo "Akshay here"
echo "welcome to datma Bengaluru"
echo "Welcome to error finding script"
echo "Welcome to this"


#!/bin/bash

log_directory="/var/log"

log_pattern="*.log"

error_keyword="error"

echo "Working on git"

output_file="/home/akshay/wrong.txt"

> "$output_file"

for log_file in $(find "$log_directory" -type f -name "$log_pattern"); do
    echo "Log : $log_file" >> "$output_file"
    
    errors=$(grep -i "$error_keyword" "$log_file")
    if [ -n "$errors" ]; then
        echo "Errors : $log_file " >> "$output_file"
        echo "$errors" >> "$output_file"
    else
        echo "No errors found." >> "$output_file"
    fi
    
    echo "" >> "$output_file"
done
  
echo "Errors saved to $output_file"


echo "do it as soon as possible"
echo "this is error finding script"
echo "error file"
echo "clear it"
