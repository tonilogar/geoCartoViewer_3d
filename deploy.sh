#!/bin/bash
 
rm -fr /home/tic/geocartoviewer_3d
 
cp -r tmp /home/tic/geocartoviewer_3d
 
rm -fr /var/www/geocartoviewer_3d/*
mkdir -p /var/www/geocartoviewer_3d
cp  -r /home/tic/geocartoviewer_3d/frontend/build/* /var/www/geocartoviewer_3d/
