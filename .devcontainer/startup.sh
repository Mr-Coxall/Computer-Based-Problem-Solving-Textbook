#!/bin/bash

# Copy .bashrc to home directory
cp ./.devcontainer/.bashrc ~/.bashrc
git config --global user.name "Mr Coxall"
git config --global user.email "mr.coxall@mths.ca"
# shellcheck source=/dev/null
source ~/.bashrc 
