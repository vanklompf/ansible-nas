# Quartz Knowledge Base

Serves a Quartz/Obsidian Markdown knowledge base as a Docker container.

Expected source checkout: `{{ quartz_source_directory }}` containing a full Quartz project with `content/` notes.

For Franek's setup the intended checkout is the shared live working tree:

```text
{{ code_root }}/knowledge-base
```

Obsidian should open the `content/` directory inside that checkout. The role builds the Quartz image from the checkout, then bind-mounts `content/` into the running container so uncommitted Markdown edits can be visible through the private web view.

The backing GitHub repo is private:

```text
https://github.com/vanklompf/knowledge-base
```

Keep `quartz_repo_url` empty when the checkout is managed manually or through the shared `/mnt/code` mount. Only set `quartz_repo_url` if the target should clone/pull from GitHub, which requires private repo access on the target.
