#!/bin/bash
echo "Starting deploy"
cd ./dist
mv ./../deploy/.gitlab-ci.yml ./.gitlab-ci.yml
mv ./../deploy/index.php ./index.php
git config --global user.name thiagotmb
git config --global user.email tmb0710@gmail.com
git init
git add .
git commit -m "new build"
