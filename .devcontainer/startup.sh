#!/bin/bash

# Copy .bashrc to home directory
cp ./.devcontainer/.bashrc ~/.bashrc
sudo apt update
sudo apt -y full-upgrade
pip3 install cpplint

sudo mkdir /usr/share/fonts/truetype/ComicMono
sudo cp ./.devcontainer/ComicMono.ttf /usr/share/fonts/truetype/ComicMono

git config --global user.name "Mr Coxall"
git config --global user.email "mr.coxall@mths.ca"
# shellcheck source=/dev/null
source ~/.bashrc 
git config pull.rebase false
