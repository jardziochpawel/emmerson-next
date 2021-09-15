#!/bin/sh

[ ! -d "./public/sitemap" ] && mkdir public/sitemap
rm -f public/sitemap/*

for value in offers common
do
    node ./sitemap-${value}.js
done

node ./sitemap.js