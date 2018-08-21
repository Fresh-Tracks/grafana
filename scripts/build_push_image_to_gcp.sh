#!/bin/sh

_grafana_tag=$1

echo "Building ${_grafana_tag}"

docker build \
	--tag "gcr.io/${GOOGLE_PROJECT_ID}/grafana:base-${_grafana_tag}" \
	--no-cache=true .
docker images
docker push "gcr.io/${GOOGLE_PROJECT_ID}/grafana:base-${_grafana_tag}"
