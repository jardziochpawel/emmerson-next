#!/bin/sh

[ ! -d "./public/sitemap" ] && mkdir public/sitemap
rm -f public/sitemap/*

for value in offers common
do
    node ./sitemap-${value}.js
done

node ./compress-sitemap.js

cd public/sitemap || exit

for value in offers common
do
  echo "removing sitemap-${value}.xml file"
  rm -rf sitemap-"${value}".xml
done

cd ../../
node ./sitemap.js