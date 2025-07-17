import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('My First Extension is now active!');

    let disposable = vscode.commands.registerCommand('my-first-extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from My First Extension!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}