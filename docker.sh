#!/usr/bin/env bash
# Author: Michal Svorc <michalsvorc.com>
# Description: Build and run Docker image

#===============================================================================
# Script options
#===============================================================================

set -o errexit      # abort on nonzero exitstatus
set -o nounset      # abort on unbound variable
set -o pipefail     # don't hide errors within pipes
# set -o xtrace       # debugging

#===============================================================================
# Variables
#===============================================================================

# Docker arguments
parent_image_name='node'
parent_image_tag='erbium-alpine'
app_name='algorithms-and-data-structures-ts'

image_name="michalsvorc/${app_name}"
image_tag="${parent_image_tag}"

container_name="${image_name//\//_}-${image_tag}"

# Dockerfile arguments
app_dir="${app_name}"
user_name='node'

#===============================================================================
# Functions
#===============================================================================

_print_help() {
cat <<HELP
Usage: ./docker.sh [COMMAND]

Docker commands helper script.

Commands:
    -h|--help       print this help text and exit
    build           build Docker image
    run             run Docker image

Example: ./docker.sh run
HELP
}

_die() {
    local error_message="${1}"

    printf 'Error: %s\nSee help for proper usage:\n\n' "${error_message}" >&2
	_print_help

    exit 1
}

_docker_build() {
    printf 'Docker build %s\n' "${image_name}:${image_tag}"

    docker build \
        --build-arg parent_image_name="${parent_image_name}" \
        --build-arg parent_image_tag="${parent_image_tag}" \
        --build-arg app_dir="${app_dir}" \
        --build-arg user_name="${user_name}" \
        --tag "${image_name}:${image_tag}" \
        "${PWD}"
}

_docker_run() {
    printf 'Docker run %s\n' "${image_name}:${image_tag}"

    local mount_app_source="${PWD}"
    local mount_app_target="/home/${user_name}/${app_dir}"

    docker run \
        -it \
        --mount "type=bind,source=${mount_app_source},target=${mount_app_target}" \
        --name "${container_name}" \
        "${image_name}:${image_tag}"
}

#===============================================================================
# Execution
#===============================================================================

if [ $# -eq 0 ]; then
    _die 'No arguments provided'
fi

case "${1}" in
    -h|--help)
        _print_help
        ;;
    build)
        _docker_build
        ;;
    run)
        _docker_run
        ;;
    *)
        _die "Unknown argument '${1}'"
        ;;
esac
