module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a component",
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: "input",
                // Variable name for this input
                name: "name",
                // Prompt to display on command line
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.tsx.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/styles.module.scss.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.types.d.ts",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.types.d.ts.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path: "src/components/{{pascalCase name}}/index.ts",
                // Handlebars template used to generate content of new file
                templateFile: "internals/plop-templates/component/index.ts.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.test.tsx.hbs",
            },
        ],
    });
    plop.setGenerator("hook", {
        description: "Create a hook",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path: "src/hooks/use{{pascalCase name}}.ts",
                // Handlebars template used to generate content of new file
                templateFile: "internals/plop-templates/hook/hook.ts.hbs",
            },
        ],
    });
};
