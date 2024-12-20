<div id="sotaswe-logo" align="center">
    <img src="./assets/logo-small.png" alt="SOTA SWE Logo" width="200"/>
    <h1>SOTA SWE</h1>
</div>

**SotaSWE is a VSCode extension built atop [the leading agentic framework](https://github.com/codestoryai/sidecar) on SWE-bench Lite. This is a working experimental repository for Memory LLM Agents using Pydantic to simulate human learning and thought and for aider using pydantic and custom tool support. I also plan on creating a Frontend using Roo-Cline and combining its features with the SOTA SWE features as well as the above. This build may be unstable so use with caution.**

![Latest release](https://img.shields.io/github/v/release/codestoryai/extension?label=version)
![Discord Shield](https://discord.com/api/guilds/1138070673756004464/widget.png?style=shield)

<div align="center">
  <a href="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/b1848f183bd6884ea21c53d0a98224c8/watch" target="_blank" rel="noopener noreferrer">
	  <img src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/b1848f183bd6884ea21c53d0a98224c8/thumbnails/thumbnail.jpg" alt="SOTA SWE in action" />
  </a>
</div>
<div align="center">
  Click preview to watch SOTA SWE in action
</div>
<br/>

- **Agentic code editing** - SOTA SWE can complete complex tasks across your codebase in agentic fashion, taking multiple steps as necessary - starting from reading the right files from your codebase, making necessary changes in-place, and iterating on it's own work in case there are pending items or issues.
- **Terminal command execution** - The agent can execute terminal commands on your behalf, and can also read the output of the command as part of it's decision making process.
- **Bring your own key** - We support Claude Sonnet provided by Anthropic as well as Open Router. Just provide your API key as part of the onboarding and you are good to go.
- **Provide context** - Though not a necessary step, you can guide the agent further by providing context using `@` to specify files as part of your prompt.

## Contributing

There are many ways in which you can participate in this project, for example:

- [Submit bugs and feature requests](https://github.com/codestoryai/extension/issues)
- Review [source code changes](https://github.com/codestoryai/extension/pulls)

If you are interested in fixing issues and contributing directly to the code base,

### System Requirements

The extension requires the following system dependencies:
- libssl3 (OpenSSL 3.0)
- Python 3.9 or newer
- pydantic v2

These dependencies will be automatically installed when running in GitHub Codespaces. For local development:

#### Ubuntu/Debian
```shell
# Add Ubuntu 22.04 repository for libssl3
echo "deb http://archive.ubuntu.com/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/jammy.list
sudo apt-get update
sudo apt-get install -y libssl3 python3.9 python3-pip
python3 -m pip install --upgrade pip
python3 -m pip install -U pydantic
```

#### macOS
```shell
brew install openssl@3
brew install python@3.9
python3 -m pip install --upgrade pip
python3 -m pip install -U pydantic
```

#### Windows
The required OpenSSL libraries are bundled with the Windows binary.
```shell
# Install Python 3.9 or newer using Windows Store or from python.org
python3 -m pip install --upgrade pip
python3 -m pip install -U pydantic
```

### Development Setup

1. Install dependencies

```shell
npm install
```

2. Run the extension in development mode with hot-reload

```shell
npm run watch
```

3. Open the repo in VSCode and press `F5` to start debugging.

4. (Optional) if you'd like to run sidecar locally too, [follow the instructions here](https://github.com/codestoryai/sidecar/blob/main/HOW_TO_CONTRIBUTE.md).

## Feedback

- Upvote [popular feature requests](https://github.com/codestoryai/extension/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
- Join our community: [Discord](https://discord.gg/mtgrhXM5Xf)

## Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Please read the Code of Conduct before contributing to this project.

## License

Copyright (c) 2024 CodeStory AI. All rights reserved.
Licensed under the [GNU Affero General Public License v3.0](LICENSE.md).
