#!/bin/bash

# Run prettier check and capture the output
check_output=$(npm run prettier-check)

# Check if there are any errors in the output
if [[ $check_output != *"All matched files use Prettier code style!"* ]]; then
    echo $check_output
    echo "Prettier check failed. Running prettier fix..."
    npm run prettier-fix
else
    echo "Prettier check passed. No need to run prettier fix."
fi

npm run lint
npm run build
