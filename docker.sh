#!/usr/bin/env sh
# Author: Michal Svorc (https://michalsvorc.com)
# Description: Build and run Docker image
# Dependencies: docker

#===============================================================================
# Script options
#===============================================================================

set -o errexit      # abort on nonzero exitstatus
set -o nounset      # abort on unbound variable
set -o pipefail     # don't hide errors within pipes
# set -o xtrace       # debugging

#===============================================================================
# Help
#===============================================================================

_print_help() {
  cat <<HELP
Usage: ./docker.sh [COMMAND]

Docker commands helper script

Commands:
  -h|--help         print this help text and exit
  build             build Docker image local stage
  network:create    create Docker container network address
  network:print     print Docker container network address
  push              push Docker image to registry
  run               run Docker image local stage

HELP
}

#===============================================================================
# Variables
#===============================================================================

# Docker
image_prefix='development'
project_name='algorithms-and-data-structures-ts'
image_name="${image_prefix}/${project_name}"

## Arguments
work_dir='workspace'

## Network
network_name='bridge'
# network_name="${image_prefix}_${project_name}"

## Image tags
image_tag='fermium'
image_tag_local="${image_tag}-local"

#===============================================================================
# Functions
#===============================================================================

_die() {
  local error_message="${1}"

  printf 'Error: %s\nSee help for proper usage:\n\n' "${error_message}" >&2
  _print_help
  exit 1
}

_docker_build_local() {
  local dockerfile='docker.local.dockerfile'

  docker build \
    -f "${dockerfile}" \
    --build-arg work_dir="${work_dir}" \
    --tag "${image_name}:${image_tag_local}" \
    "${PWD}"
  }

_docker_network_create() {
  docker network create "${network_name}"
}

_docker_network_print() {
  if [ $network_name == 'host' ]; then
    printf '"Network": "%s"\n' "host network"
  fi

  network_address=$(docker network inspect "${network_name}" \
    | grep "Gateway" \
    | awk '{$1=$1};1')

  printf '"Network": "%s"\n%s\n' "${network_name}" "${network_address}"
}

_docker_push() {
  local registry_path='registry.com/image:latest'

  docker tag "${image_name}:${image_tag}" "${registry_path}"
  docker push "${registry_path}"
}

_docker_run_local() {
  local container_name="${image_prefix}_${project_name}_${image_tag_local}"
  local mount_work_source="${PWD}"
  local mount_work_target="/home/node/${work_dir}"

  docker run \
    -it \
    --network "${network_name}" \
    --mount "type=bind,source=${mount_work_source},target=${mount_work_target}" \
    --name "${container_name}" \
    "${image_name}:${image_tag_local}"
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
    _docker_build_local
    ;;
  network:create)
    _docker_network_create
    ;;
  network:print)
    _docker_network_print
    ;;
  push)
    _docker_push
    ;;
  run)
    _docker_run_local
    ;;
  *)
    _die "Unknown argument '${1}'"
    ;;
esac
