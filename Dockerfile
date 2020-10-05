ARG parent_image_name
ARG parent_image_tag

FROM "${parent_image_name}:${parent_image_tag}"

# Buildtime arguments
ARG user_name
ARG app_dir

# Update package repositories and install packages
RUN apk add --no-cache --update \
        bash \
        git

# Set non-system user
USER "${user_name}"
ENV USER="${user_name}"
ENV HOME="/home/${user_name}"

# Change to app directory
RUN mkdir -p "${HOME}/${app_dir}"
WORKDIR "${HOME}/${app_dir}"

# Copy repository
COPY --chown="${user_name}":"${user_name}" . .

# Install node packages
RUN yarn install --frozen-lockfile

# Runtime entrypoint
ENTRYPOINT ["/bin/bash"]
