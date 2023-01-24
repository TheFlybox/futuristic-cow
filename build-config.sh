#!/bin/bash

if [ $VERCEL_ENV = 'production' ]; then
  sed -i 's/\"configCatKey\": \".*\"/\"configCatKey\": \"$CONFIG_CAT_KEY_PRODUCTION\"/g' src/assets/config.json
else
  sed -i 's/\"configCatKey\": \".*\"/\"configCatKey\": \"$CONFIG_CAT_KEY_DEVELOPMENT\"/g' src/assets/config.json
fi