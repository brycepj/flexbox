#!/usr/bin/env bash

# Rename all *.txt to *.text
for f in ./legacy/*.ts; do
mv -- "$f" "${f%.ts}.js"
done