import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import { workspaceConfig } from './files/workspace-config';
import { readme } from './files/readme-file';
import { gitIgnore } from '../common-files/git-ignore';

export const reactWorkspaceEmptyTemplate: WorkspaceTemplate = {
  name: 'react-workspace',
  description: 'create a new React project',
  generateFiles: async (context: WorkspaceContext) => {
    return [
      {
        relativePath: 'workspace.jsonc',
        content: await workspaceConfig(context),
      },
      {
        relativePath: `.gitignore`,
        content: gitIgnore(),
      },
      {
        relativePath: `README.md`,
        content: readme(),
      },
    ];
  },
};
