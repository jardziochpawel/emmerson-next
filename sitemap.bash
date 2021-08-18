#!/bin/sh

mkdir public/sitemap
rm -f public/sitemap/*

for value in offers common
do
    node ./sitemap-${value}.js
done

node ./compress-sitemap.js
cd public/sitemap || exit

for value in offers common
do
  rm -rf sitemap-"${SITEMAP}".xml
done

cd ../../
node ./sitemap.js
