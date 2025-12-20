FROM node:24.12.0-alpine3.22

WORKDIR /app

COPY package.json /app/
COPY scripts/ scripts/

RUN corepack enable pnpm
RUN pnpm install

COPY ./ /app/

RUN pnpm lint && VITEST_COVERAGE=false pnpm test

ENV PNPM_HOME="/app/.pnpm-global"
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm add -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]