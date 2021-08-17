#!/bin/bash
SECONDS=0

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
# do some work
duration=$SECONDS
echo "${BOLD}${YELLOW}$(($duration / 60)) minutes and $(($duration % 60)) seconds elapsed.${RESET}"
