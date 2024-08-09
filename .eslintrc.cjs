module.exports = {
    "eslint.run": "onType",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "vetur.validation.template": false, // 把 vetur 扩展的 template 格式化去掉
    "editor.formatOnSave": false, // 去掉 vscode 自带的自动保存 ，vscode 默认也是 false的，如果要用 eslint 格式化，默认的格式化就不能开启
    "eslint.enable": true, // eslint 格式化的配置
    "eslint.autoFixOnSave": true, // eslint保存时候自动解决语法错误
    "eslint.options": { // eslint选项-格式化js和vue文件
        "extensions": [
            ".js",
            ".vue"
        ]
    },
    "eslint.validate": [
        "javascript",
        {
            "language": "vue",
            "autoFix": true,
        },
        "html",
        "vue"
    ],
}
