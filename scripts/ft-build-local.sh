#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="${SCRIPT_DIR}/.."
SHORT_SHA="$(git rev-parse --short HEAD)"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

docker run -it -e "CIRCLE_BRANCH=${BRANCH}" -e "CIRCLE_BUILD_NUM=1" -v ${PROJECT_DIR}:/go/src/github.com/grafana/grafana --entrypoint sh grafana/build-container:1.0.0 -c "/tmp/bootstrap.sh; /go/src/github.com/grafana/grafana/scripts/build/build.sh"
