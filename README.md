# Budget-Expense-2

## Roadmap
This is the roadmap for this app. After each change, a commit should be done.

### Project initialization
1. Backend: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- [ ] Create a minimal server with Express
- [ ] Installing TypeScript
- [ ] Generating tsconfig.json
- [ ] Create an Express server with a .ts extension
- [ ] Running TypeScript in Node with ts-node
- [ ] Watching file changes
- [ ] Building or transpiling the TypeScript files
- [ ] Create an endpoint `/health` that returns `{"ok": true}`

2. Frontend:
- [ ] Install [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/installation)
- [ ] Create a hook to send REST APIs to the Backend that re-uses the useQuery from [tanstack query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [ ] Install [react bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction) and configure it
- [ ] Create a component to display the status of the health of the backend: Displays a red [badge](https://react-bootstrap.netlify.app/docs/components/badge) if not ok, and a green if ok
