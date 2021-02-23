FROM node:fermium-alpine

# Buildtime arguments
ARG user_name='node'
ARG work_dir

# Update package repositories and install packages
RUN apk add --no-cache --update \
        bash \
        git

# Set non-system user
USER "${user_name}"
ENV USER="${user_name}"
ENV HOME="/home/${user_name}"

# Change to app directory
RUN mkdir -p "${HOME}/${work_dir}"
WORKDIR "${HOME}/${work_dir}"

# Copy repository
COPY --chown="${user_name}":"${user_name}" . .

# Install node packages
RUN yarn install

# Runtime entrypoint
ENTRYPOINT ["/bin/bash"]
