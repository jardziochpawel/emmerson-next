#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
GREEN=$(tput setaf 2)
RED=$(tput setaf 1)
BLUE=$(tput setaf 4)

SITEMAP_INDEX=(offers common)

cd public && rm -rf sitemap && mkdir "sitemap"
cd ..
printf "\n"

for SITEMAP in "${SITEMAP_INDEX[@]}"; do
  echo "Generating ${BOLD}${BLUE}sitemap-${SITEMAP}.xml${RESET}..."
  node ./sitemap-"${SITEMAP}".js
  printf "\n"
done

echo "${BOLD}${GREEN}Compressing generated xml files... ${RESET}"
node ./compress-sitemap.js
printf "\n"

cd public && cd sitemap

for SITEMAP in "${SITEMAP_INDEX[@]}"; do
    echo "${BOLD}${RED}Removing sitemap-${SITEMAP}.xml...${RESET}"
  rm -rf sitemap-"${SITEMAP}".xml
done

printf "\n"

cd .. && cd ..

echo "${BOLD}${BLUE}Generating sitemap index file...${RESET}"
node ./sitemap.js
printf "\n"

