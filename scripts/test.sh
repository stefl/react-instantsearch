#!/usr/bin/env bash

# cause test to fail if one fails
set -e

if [ "$CI" = "true" ]
  then jest --runInBand
  else jest
fi

yarn lint
yarn test:regressions
yarn argos
yarn test:build
yarn test:recipes
