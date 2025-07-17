# 🎉 My First Extension

<div align="center">

![VS Code](https://img.shields.io/badge/VS%20Code-1.74.0+-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Version](https://img.shields.io/badge/Version-0.0.1-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A simple and delightful Hello World extension for Visual Studio Code**

</div>

## ✨ Features

- 🌍 **Hello World Command**: Display a friendly greeting message
- 🚀 **Lightweight**: Minimal footprint with instant activation
- 🎯 **Simple**: Perfect starting point for VS Code extension development
- 🔧 **TypeScript**: Built with modern TypeScript for reliability

## 🛠️ Installation

### From VSIX Package
1. Download the `my-first-extension-0.0.1.vsix` file
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Extensions: Install from VSIX"
5. Select the downloaded `.vsix` file

### From Source
```bash
# Clone the repository
git clone <your-repo-url>
cd my-first-extension

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Package the extension
vsce package
```

## 🎮 Usage

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Hello World"
3. Select the command and enjoy the greeting! 🎊

## 🏗️ Development

### Prerequisites
- Node.js 16.x or higher
- VS Code 1.74.0 or higher
- TypeScript 4.9.4

### Getting Started
```bash
# Install dependencies
npm install

# Watch mode for development
npm run watch

# Compile once
npm run compile
```

### Project Structure
```
my-first-extension/
├── src/
│   └── extension.ts      # Main extension code
├── out/                  # Compiled JavaScript
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 📦 Package Contents

- **Extension Source**: TypeScript source code in `src/`
- **Compiled Output**: JavaScript files in `out/`
- **Configuration**: Package manifest and TypeScript config
- **Dependencies**: VS Code API types and TypeScript

## 🎯 Commands

| Command | Description |
|---------|-------------|
| `my-first-extension.helloWorld` | Shows a "Hello World" information message |

## 🔧 Configuration

This extension doesn't require any configuration. It's ready to use right out of the box!

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch
3. 💻 Make your changes
4. 🧪 Test thoroughly
5. 📝 Submit a pull request

## 📋 Requirements

- **VS Code**: Version 1.74.0 or higher
- **Node.js**: Version 16.x for development

## 🐛 Known Issues

No known issues at this time. If you encounter any problems, please [open an issue](https://github.com/your-username/my-first-extension/issues).

## 📝 Release Notes

### 0.0.1
- 🎉 Initial release
- ✨ Basic Hello World command functionality
- 🏗️ TypeScript development setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- VS Code team for the excellent extension API
- TypeScript team for the amazing language
- The open source community for inspiration

---

<div align="center">

**Made with ❤️ for the VS Code community**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
