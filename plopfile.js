module.exports = plop => {
    /* plop.setGenerator("component", {
        description: "Create a component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                type: "add",
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile:
                    "internals/plop-templates/component/component.tsx.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
                templateFile:
                    "internals/plop-templates/component/styles.module.scss.hbs",
            },
            {
                type: "add",
                path:
                    "src/components/{{pascalCase name}}/{{pascalCase name}}.types.d.ts",
                templateFile:
                    "internals/plop-templates/component/component.types.d.ts.hbs",
            },
            {
                type: "add",
                path: "src/components/{{pascalCase name}}/index.ts",
                templateFile: "internals/plop-templates/component/index.ts.hbs",
            },
        ],
    }); */
    /*  plop.setGenerator("hook", {
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
    }); */

    plop.setGenerator("page", {
        description: "Create a page",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your page name?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
                templateFile: "internals/plop-templates/page/page.tsx.hbs",
            },
            {
                type: "add",
                path: "src/pages/{{pascalCase name}}/index.ts",
                templateFile: "internals/plop-templates/page/index.ts.hbs",
            },
        ],
    });
};
