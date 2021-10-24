#!/usr/bin/sh
port=$1
if [[ -z $port ]]; then
    port=80
fi
python3 -m http.server $port
